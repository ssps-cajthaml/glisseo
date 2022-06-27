import Test from "../test/Test";
export declare enum TestResultStatus {
    PASSED = "PASSED",
    FAILED = "FAILED",
    SKIPPED = "SKIPPED",
    ERROR = "ERROR",
    EVALUATOR_FAIL = "EVALUATOR_FAIL"
}
export default class TestResult {
    status: TestResultStatus;
    timeTaken: number;
    test: Test;
    constructor(status: TestResultStatus, test: Test, timeTaken: number);
}
