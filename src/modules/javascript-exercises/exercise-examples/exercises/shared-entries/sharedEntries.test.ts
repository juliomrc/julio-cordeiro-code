import { sharedEntries } from "./sharedEntries";

describe("Shared Entries", () => {
    function* generator(list: Array<unknown>) {
        yield* list;
    }

    it("Finds shared numbers", () => {
        const i1 = generator([0, 2, 3, 4, 9, 10]);
        const i2 = generator([1, 2, 9, 10, 14]);

        const result = sharedEntries(i1, i2);

        expect(result).toStrictEqual([2, 9, 10]);
    });

    it("Finds shared strings", () => {
        const i1 = generator(["a", "b", "c", "d", "e"]);
        const i2 = generator(["x", "g", "c", "a", "f"]);

        const result = sharedEntries(i1, i2);

        expect(result).toContain("a");
        expect(result).toContain("c");
    });

    it("Finds shared boolean values", () => {
        const i1 = generator([true, true, true, false]);
        const i2 = generator([true]);

        const result = sharedEntries(i1, i2);

        expect(result).toContain(true);
        expect(result).not.toContain(false);
    });

    it("Does not mix types", () => {
        const i1 = generator(["1", "2", "3", "4", "5"]);
        const i2 = generator([1, 2, 3, 4, 5]);

        const result = sharedEntries(i1, i2);

        expect(result).toStrictEqual([]);
    });

    it("Works with duplicates", () => {
        const i1 = generator([1, 1, 2, 2, 3, 4, 5]);
        const i2 = generator([1, 1, 2, 2, 1]);

        const result = sharedEntries(i1, i2);

        expect(result).toStrictEqual([1, 1, 2, 2]);
    });

    it("Order does not matter", () => {
        const i1 = generator([1, 1, 2, 2, 2]);
        const i2 = generator([1, 1, 2, 2, 3, 4, 5]);

        const result = sharedEntries(i1, i2);

        const i3 = generator([1, 1, 2, 2, 2]);
        const i4 = generator([1, 1, 2, 2, 3, 4, 5]);
        const resultInverse = sharedEntries(i4, i3);

        expect(result).toStrictEqual(resultInverse);
    });

    it("Does not fail with empty arrays", () => {
        const i1 = generator([]);
        const i2 = generator([]);

        const result = sharedEntries(i1, i2);

        expect(result).toStrictEqual([]);
    });

    it("Works with null and undefined", () => {
        const i1 = generator([1, 2, 3, null, undefined]);
        const i2 = generator([3, null, undefined]);

        const result = sharedEntries(i1, i2);

        expect(result).toStrictEqual([3, null, undefined]);
    });
});
