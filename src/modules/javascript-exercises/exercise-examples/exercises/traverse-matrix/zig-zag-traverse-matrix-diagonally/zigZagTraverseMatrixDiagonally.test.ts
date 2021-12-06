import { zigZagTraverseArrayDiagonally } from "./zigZagTraverseMatrixDiagonally";

it("Traverse a matrix diagonally and in zig zag", () => {
    expect(zigZagTraverseArrayDiagonally([])).toEqual([]);
    expect(
        zigZagTraverseArrayDiagonally([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]),
    ).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
    expect(
        zigZagTraverseArrayDiagonally([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ]),
    ).toEqual([1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12]);
});
