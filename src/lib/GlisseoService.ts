import GlisseoApiSettings from "./api/GlisseoApiSettings";


export default class GlisseoService {
    #apiSettings: GlisseoApiSettings;
    #assigments: Map<string, Assigment>;

    constructor(endpoint: string, password: string) {
        this.#apiSettings = new GlisseoApiSettings(endpoint, password);
    }

    addAssigment(assigment: Assigment) {
        this.#assigments.set(assigment.id, assigment);
    }

};