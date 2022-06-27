import GlisseoApiSettings from "./GlisseoApiSettings";
export interface IApiResponse {
    stdout: string;
    stderr: string;
    error: string;
}
export default class GlisseoApi {
    #private;
    run(language: string, code: string, input: string): Promise<IApiResponse>;
    constructor(settings: GlisseoApiSettings);
}
