import Test from "../test/Test";
export declare enum TestResultStatus {
    PASSED = "PASSED",
    FAILED = "FAILED",
    SKIPPED = "SKIPPED",
    ERROR = "ERROR",
    EVALUATOR_FAIL = "EVALUATOR_FAIL",
    TIME_LIMIT = "TIME_LIMIT"
}
export default class TestResult {
    status: TestResultStatus;
    timeTaken: number;
    test: Test;
    constructor(status: TestResultStatus, test: Test, timeTaken: number);
}
