import TestConfig from "./TestConfig";
export default class Test {
    id: string;
    input: string;
    output: string;
    config: TestConfig;
    required: boolean;
    constructor(id: string, input: string, output: string, config: TestConfig, required?: boolean);
    evalute(input: string): boolean;
}
