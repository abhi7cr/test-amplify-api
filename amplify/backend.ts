import { data } from "./data/resource";
import { defineBackend } from "@aws-amplify/backend";
import ci from "ci-info";

let AMPLIFY_GEN_1_ENV_NAME = process.env.AMPLIFY_GEN_1_ENV_NAME;
if (ci.isCI && !AMPLIFY_GEN_1_ENV_NAME) {
    throw new Error("AMPLIFY_GEN_1_ENV_NAME is required in CI environment");
}
else if (!ci.isCI && !AMPLIFY_GEN_1_ENV_NAME) {
    AMPLIFY_GEN_1_ENV_NAME = "sandbox";
}

const backend = defineBackend({
    data
});
