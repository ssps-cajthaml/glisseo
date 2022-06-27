"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestResultStatus = void 0;
var TestResultStatus;
(function (TestResultStatus) {
    TestResultStatus["PASSED"] = "PASSED";
    TestResultStatus["FAILED"] = "FAILED";
    TestResultStatus["SKIPPED"] = "SKIPPED";
    TestResultStatus["ERROR"] = "ERROR";
    TestResultStatus["EVALUATOR_FAIL"] = "EVALUATOR_FAIL"; // failed to evaluate the test 
})(TestResultStatus = exports.TestResultStatus || (exports.TestResultStatus = {}));
class TestResult {
    constructor(status, test, timeTaken) {
        this.status = status;
        this.test = test;
        this.timeTaken = timeTaken;
    }
}
exports.default = TestResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcmVzdWx0L1Rlc3RSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQ3hCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0lBQ2pCLHVDQUFtQixDQUFBO0lBQ25CLG1DQUFlLENBQUE7SUFDZixxREFBaUMsQ0FBQSxDQUFDLCtCQUErQjtBQUNyRSxDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFFRCxNQUFxQixVQUFVO0lBSzNCLFlBQVksTUFBd0IsRUFBRSxJQUFVLEVBQUUsU0FBaUI7UUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBVkQsNkJBVUMifQ==