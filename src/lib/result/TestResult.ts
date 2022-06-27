import Test from "../test/Test";

export enum TestResultStatus {
    PASSED = "PASSED", // The test was successful
    FAILED = "FAILED", // incorrect output
    SKIPPED = "SKIPPED", // skipped because of a previous failure
    ERROR = "ERROR" // code error, failed to compile, etc.
}

export default class TestResult {
    #status: TestResultStatus;
    #timeTaken: number;
    #test: Test;

    constructor(status: TestResultStatus, test: Test, timeTaken: number) {
        this.#status = status;
        this.#test = test;
        this.#timeTaken = timeTaken;
    }
}