import GlisseoApi, { IApiResponse } from "./api/GlisseoApi";
import GlisseoApiSettings from "./api/GlisseoApiSettings";
import Assignment from "./assignment/Assignment";
import Result from "./result/Result";
import TestResult, { TestResultStatus } from "./result/TestResult";


export default class GlisseoService {

    #apiSettings: GlisseoApiSettings;
    #glisseoApi: GlisseoApi;
    #assignments: Map<string, Assignment> = new Map;

    constructor(endpoint: string, password: string) {
        this.#apiSettings = new GlisseoApiSettings(endpoint, password);
        this.#glisseoApi = new GlisseoApi(this.#apiSettings);
    }

    getAssignments(): Assignment[] {
        return Array.from(this.#assignments.values());
    }

    addAssignment(assignment: Assignment) {
        console.log("[Glisseo] Adding assignment " + assignment.id);
        this.#assignments.set(assignment.getId(), assignment);
    }

    evaluate(assigmentId: string, code: string) {
        console.log("[Glisseo] Evaluating assignment " + assigmentId);
        return new Promise((resolve, reject) => {
            const assignment = this.#assignments.get(assigmentId);
            if (!assignment) {
                reject(`Assignment with id ${assigmentId} not found`);
                return;
            }

            const result = new Result();

            let run = Promise.resolve();

            let skipOther = false;

            for (let test of assignment.tests) {
                run = run.then(async () => {

                    if (skipOther) {
                        const testResult = new TestResult(TestResultStatus.SKIPPED, test, -1);
                        result.tests.push(testResult);

                        return;
                    }
                    const startTime = new Date().getTime();

                    let codeResult: IApiResponse;
                    try {
                        codeResult = await this.#glisseoApi.run(assignment.config.language, code, test.input);
                    } catch (err) {
                        console.log(err);
                        result.tests.push(new TestResult(TestResultStatus.EVALUATOR_FAIL, test, -1));
                        
                        if (test.required)
                            skipOther = true;

                        return;
                    }

                    if (codeResult.error.length !== 0) {
                        result.tests.push(new TestResult(TestResultStatus.ERROR, test, -1));
                        
                        if (test.required)
                            skipOther = true;

                        return;
                    }

                    const stdout = codeResult.stdout;

                    const startEnd = new Date().getTime();
                    const timeTaken = startEnd - startTime;

                    if (timeTaken > test.config.timeLimit) {
                        result.tests.push(new TestResult(TestResultStatus.FAILED, test, timeTaken));

                        if (test.required)
                            skipOther = true;

                        return;
                    }

                    const testSuccessful = test.evalute(stdout);

                    const testResult = new TestResult(testSuccessful ? TestResultStatus.PASSED : TestResultStatus.FAILED, test, timeTaken);

                    result.tests.push(testResult);
                });
            }

            run = run.then(() => {
                console.log("[Glisseo] Assignment " + assigmentId + " evaluated.");

                return resolve(result);
            })

        });
    }

};