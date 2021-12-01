import { flattenArray } from "./flatten-array";

describe("Flatten array", () => {
    it("Flattens array", () => {
        expect(flattenArray([1, [2, 3], 4])).toStrictEqual([1, 2, 3, 4]);
    });

    it("Flattens strings array", () => {
        expect(flattenArray(["a", ["b", "c"], "d"])).toStrictEqual([
            "a",
            "b",
            "c",
            "d",
        ]);
    });

    it("Flattens array with null and undefined", () => {
        expect(
            flattenArray<string | null | undefined>([
                "a",
                [null, undefined],
                "d",
            ]),
        ).toStrictEqual(["a", null, undefined, "d"]);
    });

    it("Flattens nested arrays", () => {
        expect(flattenArray([1, [2, [3]], 4])).toStrictEqual([1, 2, 3, 4]);
    });

    it("Returns empty array as is", () => {
        expect(flattenArray([])).toStrictEqual([]);
    });
});
