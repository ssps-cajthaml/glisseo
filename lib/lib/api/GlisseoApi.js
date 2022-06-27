"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GlisseoApi_settings;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class GlisseoApi {
    constructor(settings) {
        _GlisseoApi_settings.set(this, void 0);
        __classPrivateFieldSet(this, _GlisseoApi_settings, settings, "f");
    }
    run(language, code, input) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(__classPrivateFieldGet(this, _GlisseoApi_settings, "f").endpoint + "/run", {
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
                    'X-Access-Token': __classPrivateFieldGet(this, _GlisseoApi_settings, "f").password
                }
            }).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.default = GlisseoApi;
_GlisseoApi_settings = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xpc3Nlb0FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpL0dsaXNzZW9BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBMEI7QUFTMUIsTUFBcUIsVUFBVTtJQWdDM0IsWUFBWSxRQUE0QjtRQTlCeEMsdUNBQThCO1FBK0IxQix1QkFBQSxJQUFJLHdCQUFhLFFBQVEsTUFBQSxDQUFDO0lBQzlCLENBQUM7SUE5QkQsR0FBRyxDQUFDLFFBQWdCLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxlQUFLLENBQUMsSUFBSSxDQUFDLHVCQUFBLElBQUksNEJBQVUsQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFO2dCQUN6QyxLQUFLLEVBQUUsUUFBUSxRQUFRLFNBQVM7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDTCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFO3dCQUNIOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxJQUFJO3lCQUNoQjtxQkFDSjtpQkFDSjthQUNKLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFO29CQUNMLGdCQUFnQixFQUFFLHVCQUFBLElBQUksNEJBQVUsQ0FBQyxRQUFRO2lCQUM1QzthQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQW9CLENBQUM7Z0JBRTNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBS0o7QUFuQ0QsNkJBbUNDIn0=