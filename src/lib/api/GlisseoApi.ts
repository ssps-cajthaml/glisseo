import axios, { Axios } from "axios";
import GlisseoApiSettings from "./GlisseoApiSettings";

export default class GlisseoApi {

    #settings: GlisseoApiSettings;

    /*
    curl --request POST \
     --header 'X-Access-Token: some-secret-token' \
     --header 'Content-type: application/json' \
     --data '{"image": "glot/python:latest", "payload": {"language": "python", "files": [{"name": "main.py", "content": "print(42)"}]}}' \
     --url 'http://<docker-run>/run'*/

    run() {
        axios.post(this.#settings.endpoint + "/run", {
            image: "glot/csharp:latest",
            payload: {
                language: "csharp",
                files: [
                    {
                        name: "Program.cs",
                        content: `using System.Collections.Generic;

                        namespace Program
                        {
                            class Program
                            {
                                static void Main()
                                {
                                    Console.WriteLine("Hello World!");
                                }
                            }
                        }`
                    }
                ]
            }
        }, {
            headers: {
                'X-Access-Token': this.#settings.password
            }
        }).then(response => {
            console.log(response.data);
        });
    }

    constructor(settings: GlisseoApiSettings) {
        this.#settings = settings;
    }
}