import Assignment from "./lib/assignment/Assignment";
import GlisseoService from "./lib/GlisseoService";
import Test from "./lib/test/Test";

if (process.env.NODE_ENV === "dev") {
    require("source-map-support").install();
}

console.log("[Glisseo] Starting...");

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
});
