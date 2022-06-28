"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GlisseoService_apiSettings, _GlisseoService_glisseoApi, _GlisseoService_assignments;
Object.defineProperty(exports, "__esModule", { value: true });
const GlisseoApi_1 = require("./api/GlisseoApi");
const GlisseoApiSettings_1 = require("./api/GlisseoApiSettings");
const Result_1 = require("./result/Result");
const TestResult_1 = require("./result/TestResult");
class GlisseoService {
    constructor(endpoint, password) {
        _GlisseoService_apiSettings.set(this, void 0);
        _GlisseoService_glisseoApi.set(this, void 0);
        _GlisseoService_assignments.set(this, new Map);
        __classPrivateFieldSet(this, _GlisseoService_apiSettings, new GlisseoApiSettings_1.default(endpoint, password), "f");
        __classPrivateFieldSet(this, _GlisseoService_glisseoApi, new GlisseoApi_1.default(__classPrivateFieldGet(this, _GlisseoService_apiSettings, "f")), "f");
    }
    getAssignments() {
        return Array.from(__classPrivateFieldGet(this, _GlisseoService_assignments, "f").values());
    }
    addAssignment(assignment) {
        console.log("[Glisseo] Adding assignment " + assignment.id);
        __classPrivateFieldGet(this, _GlisseoService_assignments, "f").set(assignment.getId(), assignment);
    }
    evaluate(assigmentId, code) {
        console.log("[Glisseo] Evaluating assignment " + assigmentId);
        return new Promise((resolve, reject) => {
            const assignment = __classPrivateFieldGet(this, _GlisseoService_assignments, "f").get(assigmentId);
            if (!assignment) {
                reject(`Assignment with id ${assigmentId} not found`);
                return;
            }
            const result = new Result_1.default();
            let run = Promise.resolve();
            let skipOther = false;
            for (let test of assignment.tests) {
                run = run.then(async () => {
                    if (skipOther) {
                        const testResult = new TestResult_1.default(TestResult_1.TestResultStatus.SKIPPED, test, -1);
                        result.tests.push(testResult);
                        return;
                    }
                    const startTime = new Date().getTime();
                    let codeResult;
                    try {
                        codeResult = await __classPrivateFieldGet(this, _GlisseoService_glisseoApi, "f").run(assignment.config.language, code, test.input);
                    }
                    catch (err) {
                        result.tests.push(new TestResult_1.default(TestResult_1.TestResultStatus.EVALUATOR_FAIL, test, -1));
                        if (test.required)
                            skipOther = true;
                        return;
                    }
                    if (codeResult.error.length !== 0) {
                        result.tests.push(new TestResult_1.default(TestResult_1.TestResultStatus.ERROR, test, -1));
                        if (test.required)
                            skipOther = true;
                        return;
                    }
                    const stdout = codeResult.stdout;
                    const startEnd = new Date().getTime();
                    const timeTaken = startEnd - startTime;
                    if (timeTaken > test.config.timeLimit) {
                        result.tests.push(new TestResult_1.default(TestResult_1.TestResultStatus.TIME_LIMIT, test, timeTaken));
                        if (test.required)
                            skipOther = true;
                        return;
                    }
                    const testSuccessful = test.evalute(stdout);
                    const testResult = new TestResult_1.default(testSuccessful ? TestResult_1.TestResultStatus.PASSED : TestResult_1.TestResultStatus.FAILED, test, timeTaken);
                    result.tests.push(testResult);
                });
            }
            run = run.then(() => {
                console.log("[Glisseo] Assignment " + assigmentId + " evaluated.");
                return resolve(result);
            });
        });
    }
}
exports.default = GlisseoService;
_GlisseoService_apiSettings = new WeakMap(), _GlisseoService_glisseoApi = new WeakMap(), _GlisseoService_assignments = new WeakMap();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xpc3Nlb1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0dsaXNzZW9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTREO0FBQzVELGlFQUEwRDtBQUUxRCw0Q0FBcUM7QUFDckMsb0RBQW1FO0FBR25FLE1BQXFCLGNBQWM7SUFNL0IsWUFBWSxRQUFnQixFQUFFLFFBQWdCO1FBSjlDLDhDQUFpQztRQUNqQyw2Q0FBd0I7UUFDeEIsc0NBQXdDLElBQUksR0FBRyxFQUFDO1FBRzVDLHVCQUFBLElBQUksK0JBQWdCLElBQUksNEJBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFBLENBQUM7UUFDL0QsdUJBQUEsSUFBSSw4QkFBZSxJQUFJLG9CQUFVLENBQUMsdUJBQUEsSUFBSSxtQ0FBYSxDQUFDLE1BQUEsQ0FBQztJQUN6RCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBQSxJQUFJLG1DQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELHVCQUFBLElBQUksbUNBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRLENBQUMsV0FBbUIsRUFBRSxJQUFZO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxNQUFNLFVBQVUsR0FBRyx1QkFBQSxJQUFJLG1DQUFhLENBQUMsR0FBRyxDQUFD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