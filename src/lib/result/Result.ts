import TestResult, { TestResultStatus } from "./TestResult";

export default class Result {
    timeTaken: number;
    testResults: Array<TestResult>;

    getStatus() {

    }

    constructor(status: TestResultStatus, testResults: Array<TestResult>, timeTaken: number) {
        this.testResults = testResults;
        this.timeTaken = timeTaken;
    }
}