import GlisseoService from "./lib/GlisseoService";

if (process.env.NODE_ENV === "dev") {
    require("source-map-support").install();
}

console.log("[Glisseo] Starting...");

const endpoint = process.env.GLISSEO_ENDPOINT || "http://localhost:8080";
const password = process.env.GLISSEO_PASSWORD || "";

const gs: GlisseoService = new GlisseoService(endpoint, password);

