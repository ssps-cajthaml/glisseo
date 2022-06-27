import TestConfig from "./TestConfig";

export default class Test{

    #input: string;
    #output: string;
    #config: TestConfig;

    constructor(input: string, output: string, config: TestConfig) {
        this.#input = input;
        this.#output = output;
        this.#config = config;
    }

    evalute(input: string): boolean {
        //TODO: implement trims and EOL
        return input === this.#output;
    }

}