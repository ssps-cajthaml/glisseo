"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlisseoService = exports.TestConfig = exports.Test = exports.TestResult = exports.Result = exports.AssignmentConfig = exports.Assignment = exports.GlisseoApiSettings = exports.GlisseoApi = void 0;
const GlisseoApi_1 = require("./lib/api/GlisseoApi");
exports.GlisseoApi = GlisseoApi_1.default;
const GlisseoApiSettings_1 = require("./lib/api/GlisseoApiSettings");
exports.GlisseoApiSettings = GlisseoApiSettings_1.default;
const Assignment_1 = require("./lib/assignment/Assignment");
exports.Assignment = Assignment_1.default;
const AssignmentConfig_1 = require("./lib/assignment/AssignmentConfig");
exports.AssignmentConfig = AssignmentConfig_1.default;
const GlisseoService_1 = require("./lib/GlisseoService");
exports.GlisseoService = GlisseoService_1.default;
const Result_1 = require("./lib/result/Result");
exports.Result = Result_1.default;
const TestResult_1 = require("./lib/result/TestResult");
exports.TestResult = TestResult_1.default;
const Test_1 = require("./lib/test/Test");
exports.Test = Test_1.default;
const TestConfig_1 = require("./lib/test/TestConfig");
exports.TestConfig = TestConfig_1.default;
if (process.env.NODE_ENV === "dev") {
    require("source-map-support").install();
}
console.log("[Glisseo] Starting...");
/*
const endpoint = process.env.GLISSEO_ENDPOINT || "https://glisseo.cajthaml.eu";
const password = process.env.GLISSEO_PASSWORD || "kouminek-je-kominek-ktery-kouma";

const gs: GlisseoService = new GlisseoService(endpoint, password);

gs.addAssignment(
    new Assignment("assignment1").setConfig({
        language: "csharp",
    }).addTest(
        new Test("basic 1", "1\n2", "3\n",
            { timeLimit: 1500 }
        )
    ).addTest(
        new Test("basic 2","10001\n2", "10003\n",
            { timeLimit: 1500 }
        )
    ).addTest(
        new Test("overflow", "30120391203910239019\n2", "?\n",
            { timeLimit: 1500 }
        )
    )
);

// TODO for Matěj Cajthaml: create basic limits as environment in docker

gs.evaluate("assignment1", `
using System;
using System.Collections.Generic;

namespace Program
{
    class Program
    {
        static void Main()
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            Console.WriteLine(a + b);
        }
    }
}`).then(result => {
    console.log(result);
});*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQThDO0FBaUIxQyxxQkFqQkcsb0JBQVUsQ0FpQkg7QUFoQmQscUVBQThEO0FBaUIxRCw2QkFqQkcsNEJBQWtCLENBaUJIO0FBaEJ0Qiw0REFBcUQ7QUFpQmpELHFCQWpCRyxvQkFBVSxDQWlCSDtBQWhCZCx3RUFBaUU7QUFpQjdELDJCQWpCRywwQkFBZ0IsQ0FpQkg7QUFoQnBCLHlEQUFrRDtBQXFCOUMseUJBckJHLHdCQUFjLENBcUJIO0FBcEJsQixnREFBeUM7QUFnQnJDLGlCQWhCRyxnQkFBTSxDQWdCSDtBQWZWLHdEQUFpRDtBQWdCN0MscUJBaEJHLG9CQUFVLENBZ0JIO0FBZmQsMENBQW1DO0FBZ0IvQixlQWhCRyxjQUFJLENBZ0JIO0FBZlIsc0RBQStDO0FBZ0IzQyxxQkFoQkcsb0JBQVUsQ0FnQkg7QUFkZCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtJQUNoQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUMzQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQWFyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0Q0sifQ==