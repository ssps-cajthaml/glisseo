import Assignment from "./assignment/Assignment";
export default class GlisseoService {
    #private;
    constructor(endpoint: string, password: string);
    getAssignments(): Assignment[];
    addAssignment(assignment: Assignment): void;
    evaluate(assigmentId: string, code: string): Promise<unknown>;
}
