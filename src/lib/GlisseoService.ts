import GlisseoApiSettings from "./api/GlisseoApiSettings";
import Assignment from "./assignment/Assignment";


export default class GlisseoService {

    #apiSettings: GlisseoApiSettings;
    //todo: fix
    #assignments: Map<string, Assignment> = new Map;

    constructor(endpoint: string, password: string) {
        this.#apiSettings = new GlisseoApiSettings(endpoint, password);
    }

    getAssignments(): Assignment[] {
        return Array.from(this.#assignments.values());
    }

    addAssignment(assignment: Assignment) {

        this.#assignments.set(assignment.getId(), assignment);
    }

    addToQueue(id: string, assignment: Assignment) {
    }

};