import GlisseoApi, { IApiResponse } from "./api/GlisseoApi";
import GlisseoApiSettings from "./api/GlisseoApiSettings";
import Assignment from "./assignment/Assignment";
import Result from "./result/Result";
import TestResult, { TestResultStatus } from "./result/TestResult";


export default class GlisseoService {

    #apiSettings: GlisseoApiSettings;
    #glisseoApi: GlisseoApi;
    //todo: fix
    #assignments: Map<string, Assignment> = new Map;

    constructor(endpoint: string, password: string) {
        this.#apiSettings = new GlisseoApiSettings(endpoint, password);
        this.#glisseoApi = new GlisseoApi(this.#apiSettings);
    }

    getAssignments(): Assignment[] {
        return Array.from(this.#assignments.values());
    }

    addAssignment(assignment: Assignment) {
        this.#assignments.set(assignment.getId(), assignment);
    }

    evaluate(assigmentId: string, code: string) {
        return new Promise((resolve, reject) => {
            const assignment = this.#assignments.get(assigmentId);
            if(!assignment) {
                reject(`Assignment with id ${assigmentId} not found`);
                return;
            }

            const result = new Result();

            const startTime = new Date().getTime();

            let run = Promise.resolve();
            for(let test of assignment.tests) {
                run = run.then(async () => {
                    const startTime = new Date().getTime();

                    let codeResult: IApiResponse;
                    try {
                        codeResult = await this.#glisseoApi.run(assignment.config.language, code, test.input);
                    } catch (err) {
                        console.log(err);
                        result.tests.push(new TestResult(TestResultStatus.EVALUATOR_FAIL, test, -1));
                        return;
                    }

                    if(codeResult.error.length !== 0) {
                        result.tests.push(new TestResult(TestResultStatus.ERROR, test, -1));
                        // TODO: skip other if this test was required
                        return;
                    }

                    const stdout = codeResult.stdout;

                    const startEnd = new Date().getTime();
                    const timeTaken = startEnd - startTime;

                    if(timeTaken > test.config.timeLimit) {
                        result.tests.push(new TestResult(TestResultStatus.FAILED, test, timeTaken));
                        return;
                    }

                    const testSuccessful = test.evalute(stdout);

                    const testResult = new TestResult(testSuccessful ? TestResultStatus.PASSED : TestResultStatus.FAILED, test, timeTaken);

                    result.tests.push(testResult);
                });
            }

            run = run.then(() => {
                // Test finished, resolve main promise
                const endTime = new Date().getTime();
                result.timeTaken = endTime - startTime;
                
                return resolve(result);
            })

        });
    }

};