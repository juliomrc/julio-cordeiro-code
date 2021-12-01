import { customBind, customCall } from "./customBind";

jest.spyOn(Function.prototype, "bind").mockImplementation(customBind);
jest.spyOn(Function.prototype, "call").mockImplementation(customCall);

describe("Custom bind implementation", () => {
    it("Binds this", () => {
        function sayHello(this: { name: string }) {
            return `Hello ${this.name}`;
        }

        const sayHelloToKate = sayHello.bind({ name: "Kate" });

        expect(sayHelloToKate()).toBe("Hello Kate");
    });

    it("Calls function", () => {
        function sayGreetings1(...greetings: string[]) {
            return `${greetings.join(", ")}`;
        }

        expect(sayGreetings1.call(null, "Hello", "hi")).toBe("Hello, hi");
    });

    it("Accepts multiple arguments", () => {
        function sayGreetings(...greetings: string[]) {
            return `${greetings.join(", ")}`;
        }

        const sayOlaAndOtherGreetings = sayGreetings.bind(null, "Ola");

        expect(sayOlaAndOtherGreetings("Hello")).toBe("Ola, Hello");
    });

    it("Accepts multiple arguments and binds this", () => {
        function sayGreetings(this: { name: string }, ...greetings: string[]) {
            return `${greetings.join(", ")} ${this.name}`;
        }

        const sayOlaAndOtherGreetingsToKate = sayGreetings.bind(
            {
                name: "Kate",
            },
            "Ola",
        );

        expect(sayOlaAndOtherGreetingsToKate("Hey", "Cześć")).toBe(
            "Ola, Hey, Cześć Kate",
        );
    });
});
