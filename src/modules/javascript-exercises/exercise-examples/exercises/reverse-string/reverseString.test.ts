import { shortReverseString, traditionalReverseString } from "./reverseString";

describe("Reverses string", () => {
    it("returns reverted string", () => {
        expect(shortReverseString("word")).toStrictEqual("drow");
        expect(traditionalReverseString("word")).toStrictEqual("drow");
    });

    it("returns reverted string of numbers", () => {
        expect(shortReverseString("12358")).toStrictEqual("85321");
        expect(traditionalReverseString("12358")).toStrictEqual("85321");
    });

    it("returns reverted string of mixed numbers and letters", () => {
        expect(shortReverseString("a1b2c3d58")).toStrictEqual("85d3c2b1a");
        expect(traditionalReverseString("a1b2c3d58")).toStrictEqual(
            "85d3c2b1a",
        );
    });

    it("returns reverted string of special chars", () => {
        expect(shortReverseString("#$ %^#$ _-+=!@$&*")).toStrictEqual(
            "*&$@!=+-_ $#^% $#",
        );
        expect(traditionalReverseString("#$ %^#$ _-+=!@$&*")).toStrictEqual(
            "*&$@!=+-_ $#^% $#",
        );
    });

    it("returns empty string as is", () => {
        expect(shortReverseString("")).toStrictEqual("");
        expect(traditionalReverseString("")).toStrictEqual("");
    });
});
