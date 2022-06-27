import axios from "axios";
import GlisseoApiSettings from "./GlisseoApiSettings";

export interface IApiResponse {
    stdout: string;
    stderr: string;
    error: string;
}

export default class GlisseoApi {

    #settings: GlisseoApiSettings;

    run(language: string, code: string, input: string): Promise<IApiResponse> {
        return new Promise((resolve, reject) => {
            axios.post(this.#settings.endpoint + "/run", {
                image: `glot/${language}:latest`,
                payload: {
                    language: language,
                    stdin: input,
                    files: [
                        {
                            name: "Program",
                            content: code
                        }
                    ]
                }
            }, {
                headers: {
                    'X-Access-Token': this.#settings.password
                }
            }).then((response: any) => {
                const data = response.data as IApiResponse;

                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    constructor(settings: GlisseoApiSettings) {
        this.#settings = settings;
    }
}