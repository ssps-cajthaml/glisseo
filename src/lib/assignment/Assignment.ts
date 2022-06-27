import AssignmentConfig from "./AssignmentConfig";

export default class Assigment {

    #id: string;
    #config: AssignmentConfig;


    getId() {
        return this.#id;
    }

    setConfig(config: AssignmentConfig) {
        this.#config = config;
    }

    constructor(id: string) {
        this.#id = id;
        this.#config = new AssignmentConfig();
    }
}