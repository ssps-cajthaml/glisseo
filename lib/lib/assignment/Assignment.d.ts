import Test from "../test/Test";
import AssignmentConfig from "./AssignmentConfig";
export default class Assignment {
    id: string;
    config: AssignmentConfig;
    tests: Array<Test>;
    getId(): string;
    setConfig(config: AssignmentConfig): this;
    addTest(test: Test): this;
    constructor(id: string);
}
