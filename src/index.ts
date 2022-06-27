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
        timeLimit: 3000
    }).addTest(
        new Test("", "Hello World!\n",
            { memory: 128_000_000, timeLimit: 3000 }
        )
    ).addTest(
        new Test("", "Hello Worldaaaa!",
            { memory: 128_000_000, timeLimit: 3000 }
        )
    ).addTest(
        new Test("", "Hello World!\n",
            { memory: 128_000_000, timeLimit: 800 }
        )
    )
);

// TODO: memory iwll probably not work (remove from configs)
// TODO: create basic limits as environment in docker
// TODO: add console logs

gs.evaluate("assignment1", `
using System;
using System.Collections.Generic;

namespace Program
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello World!");
        }
    }
}`).then(result => {
    console.log(result);
});
