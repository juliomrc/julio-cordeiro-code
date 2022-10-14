import { customExpect, customTest } from "./customJest";

function failingAdd(a: number, b: number) {
    return a - b;
}

function add(a: number, b: number) {
    return a + b;
}

describe("Custom Jest implementation", () => {
    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
    });
    test("CustomTest prints success to the console", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await customTest("customTest", () => {
            const goodResult = add(2, 2);

            customExpect(goodResult).toBe(4);
        });

        expect(consoleSpy).toHaveBeenCalledWith("✓ customTest");
    });

    test("CustomTest and customExpect print the errors to the console", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await customTest("customTest", () => {
            const goodResult = failingAdd(2, 2);

            customExpect(goodResult).toBe(4);
        });

        expect(consoleSpy).toHaveBeenCalledWith("✗ customTest");
        expect(consoleSpy).toHaveBeenCalledWith(
            "Got 0 and expected it to be 4",
        );
    });

    test("CustomTest waits for promises", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await customTest("customTest", async () => {
            const goodResult = add(2, 2);

            await new Promise((res) => setTimeout(res, 500));
            customExpect(goodResult).toBe(4);
        });

        expect(consoleSpy).toHaveBeenCalledWith("✓ customTest");
    });

    test("CustomTest executes all tests even when one of them fails", async () => {
        const consoleSpy = jest.spyOn(console, "log");

        await customTest("customTest", async () => {
            const goodResult = failingAdd(2, 2);

            customExpect(goodResult).toBe(4);
        });

        await customTest("customTest", async () => {
            const goodResult = add(2, 2);

            customExpect(goodResult).toBe(4);
        });

        expect(consoleSpy).toHaveBeenCalledWith("✗ customTest");
        expect(consoleSpy).toHaveBeenCalledWith("✓ customTest");
    });
});
