import { genericTraverseMatrixDiagonally } from "./genericTraverseMatrixDiagonally";

describe("Generic Traverse Matrix Diagonally", () => {
    it("Does not break with empty matrix", () => {
        expect(genericTraverseMatrixDiagonally([])).toEqual([]);
    });
    it("Traverses going down and left", () => {
        expect(
            genericTraverseMatrixDiagonally(
                [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12],
                ],
                "down",
                "left",
            ),
        ).toEqual([12, 8, 11, 4, 7, 10, 3, 6, 9, 2, 5, 1]);
    });
    it("Traverses going down and right", () => {
        expect(
            genericTraverseMatrixDiagonally(
                [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12],
                ],
                "down",
                "right",
            ),
        ).toEqual([9, 5, 10, 1, 6, 11, 2, 7, 12, 3, 8, 4]);
    });
    it("Traverses going up and left", () => {
        expect(
            genericTraverseMatrixDiagonally(
                [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12],
                ],
                "up",
                "left",
            ),
        ).toEqual([4, 8, 3, 12, 7, 2, 11, 6, 1, 10, 5, 9]);
    });
    it("Traverses going up and right", () => {
        expect(
            genericTraverseMatrixDiagonally(
                [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12],
                ],
                "up",
                "right",
            ),
        ).toEqual([1, 5, 2, 9, 6, 3, 10, 7, 4, 11, 8, 12]);
    });
});
