import TestResult, { TestResultStatus } from "./TestResult";

export default class Result {
    timeTaken: number = -1;
    tests: Array<TestResult> = [];
}