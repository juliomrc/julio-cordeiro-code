import { promisify } from "./promisify";

describe("Promisify", () => {
    it("Resolves promise", async () => {
        const identity = <T>(something: T) => something;
        const promisedIdentity = promisify(identity);

        const result = await promisedIdentity(42);

        expect(result).toBe(42);
    });

    it("Accepts multiple arguments", async () => {
        const greet = (greeting: string, name: string) =>
            `${greeting}, ${name}!`;
        const promisedGreet = promisify<string, string>(greet);

        const result = await promisedGreet("Hey", "you");

        expect(result).toBe("Hey, you!");
    });

    it("Implements reject", async () => {
        const reject = () => {
            throw "Major error!";
        };
        const promisedSuccess = promisify(reject);

        let result;
        try {
            result = await promisedSuccess();
        } catch (exception) {
            result = exception;
        }

        expect(result).toBe("Major error!");
    });
});
