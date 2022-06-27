import Assignment from "./lib/assignment/Assignment";
import GlisseoService from "./lib/GlisseoService";
import Test from "./lib/test/Test";
import TestConfig from "./lib/test/TestConfig";

if (process.env.NODE_ENV === "dev") {
    require("source-map-support").install();
}

console.log("[Glisseo] Starting...");

const endpoint = process.env.GLISSEO_ENDPOINT || "http://localhost:8080";
const password = process.env.GLISSEO_PASSWORD || "";

const gs: GlisseoService = new GlisseoService(endpoint, password);

gs.addAssignment(
    new Assignment("assignment1").setConfig({
        language: "csharp",
        timeLimit: 3000
    }).addTest(
        new Test("1", "2",
            { memory: 128_000_000, timeLimit: 3000 }
        )
    )
);

console.log(gs.getAssignments()[0].tests[0]);
