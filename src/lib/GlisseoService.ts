import GlisseoApiSettings from "./api/GlisseoApiSettings";
import Assignment from "./assignment/Assignment";
import Result from "./result/Result";
import TestResult, { TestResultStatus } from "./result/TestResult";


export default class GlisseoService {

    #apiSettings: GlisseoApiSettings;
    //todo: fix
    #assignments: Map<string, Assignment> = new Map;

    constructor(endpoint: string, password: string) {
        this.#apiSettings = new GlisseoApiSettings(endpoint, password);
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
                    // Run code with API
                    await new Promise((resolve, reject) => { setTimeout(() => {resolve("aaa");}, 3000) });
                    const stdout = "";

                    const startEnd = new Date().getTime();
                    const timeTaken = startEnd - startTime;
                    // TODO: is timeLimit exceeded? Ok? Check...

                    const testSuccessful = test.evalute(stdout); 

                    // TODO: what is status of this test?
                    const testResult = new TestResult(TestResultStatus.PASSED, test, timeTaken);

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