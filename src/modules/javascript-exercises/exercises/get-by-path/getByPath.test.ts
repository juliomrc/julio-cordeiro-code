import { getByPath } from "./getByPath";

describe("GetByPath", () => {
    it("Returns undefined for non existent path", () => {
        const result = getByPath(["foo", "bar", "horse"], {
            foo: { bar: { baz: 42 } },
        });

        expect(result).toBeUndefined();
    });

    it("Returns undefined for wrong nested path", () => {
        const arrayPathResult = getByPath(["abc", "abc"], { foo: "bar" });

        expect(arrayPathResult).toStrictEqual(undefined);
    });

    it("Gets by prop name", () => {
        const result = getByPath("foo", { foo: "bar" });

        expect(result).toStrictEqual("bar");
    });

    it("Gets by index", () => {
        const result = getByPath(1, ["a", "b", "c", "d"]);

        expect(result).toStrictEqual("b");
    });

    it("Gets by short path", () => {
        const result = getByPath(["foo"], { foo: "bar" });

        expect(result).toStrictEqual("bar");
    });

    it("Gets by path", () => {
        const result = getByPath(["foo", "bar", "baz"], {
            foo: { bar: { baz: 42 } },
        });

        expect(result).toStrictEqual(42);
    });

    it("Gets by mixed path", () => {
        const result = getByPath(["foo", 0, "bar", "baz"], {
            foo: [{ bar: { baz: 42 } }],
        });

        expect(result).toStrictEqual(42);
    });

    it("Gets by path form nested array", () => {
        const result = getByPath([0, 0, 1], [[["foo", "bar"], "c"], "b"]);

        expect(result).toStrictEqual("bar");
    });
});
