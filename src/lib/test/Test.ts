import TestConfig from "./TestConfig";

export default class Test {
    id: string;
    input: string;
    output: string;
    config: TestConfig;
    required: boolean;


    constructor(id: string, input: string, output: string, config: TestConfig, required: boolean = true) {
        this.id = id;
        this.input = input;
        this.output = output;
        this.config = config;
        this.required = required;
    }

    evalute(input: string): boolean {
        //TODO: implement trims and EOL
        return input === this.output;
    }

}