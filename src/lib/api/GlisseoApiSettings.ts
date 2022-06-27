export default class GlisseoApiSettings {
    endpoint: string;
    password: string;

    constructor(endpoint: string, password: string) {
        this.endpoint = endpoint;
        this.password = password;
    }
}