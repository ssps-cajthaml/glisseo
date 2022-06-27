import GlisseoApi from "./lib/api/GlisseoApi";
import GlisseoApiSettings from "./lib/api/GlisseoApiSettings";
import Assignment from "./lib/assignment/Assignment";
import AssignmentConfig from "./lib/assignment/AssignmentConfig";
import GlisseoService from "./lib/GlisseoService";
import Result from "./lib/result/Result";
import TestResult from "./lib/result/TestResult";
import Test from "./lib/test/Test";
import TestConfig from "./lib/test/TestConfig";

if (process.env.NODE_ENV === "dev") {
    require("source-map-support").install();
}

console.log("[Glisseo] Starting...");

export {
    GlisseoApi,
    GlisseoApiSettings,
    Assignment,
    AssignmentConfig,
    Result,
    TestResult,
    Test,
    TestConfig,
    GlisseoService,
}
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