import Test from "../test/Test";
import AssignmentConfig from "./AssignmentConfig";

export default class Assignment {

    id: string;
    config: AssignmentConfig;
    tests : Array<Test>;

    getId() {
        return this.id;
    }

    setConfig(config: AssignmentConfig) {
        this.config = config;
        return this;
    }

    addTest(test: Test) {
        this.tests.push(test);
        return this;
    }

    constructor(id: string) {
        this.id = id;
        this.config = new AssignmentConfig();
        this.tests = new Array<Test>();
    }
}