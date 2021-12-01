import { deDuplicate } from "./deDuplicate";

describe("deduplicate", () => {
    it("removes duplicate strings", () => {
        expect(
            deDuplicate(
                "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
            ),
        ).toStrictEqual("alpha beta gamma delta");
    });

    it("returns string as is if no duplicates", () => {
        expect(deDuplicate("one two three four five")).toStrictEqual(
            "one two three four five",
        );
    });

    it("differs uppercase letters", () => {
        expect(deDuplicate("one two ONE TWO")).toStrictEqual("one two ONE TWO");
    });

    it("removes number words", () => {
        expect(deDuplicate("one two three 4 five six 4")).toStrictEqual(
            "one two three 4 five six",
        );
    });

    it("removes special symbol words", () => {
        expect(deDuplicate("one two #$% three #$% four $$ $$")).toStrictEqual(
            "one two #$% three four $$",
        );
    });

    it("returns empty string as is", () => {
        expect(deDuplicate("")).toStrictEqual("");
    });
});
