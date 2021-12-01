import { sortMatrixByNumberOfRepetitionsAndByValue } from "./sortMatrixByNumberOfRepetitionsAndByValue";

test("Sort a matrix first by number of repetitions and if equal then by value", () => {
    expect(sortMatrixByNumberOfRepetitionsAndByValue([[1, 1, 2]])).toEqual([
        1, 1, 2,
    ]);
    expect(
        sortMatrixByNumberOfRepetitionsAndByValue([
            [1, 1, 2],
            [4, 4, 4],
            [7, 7, 7],
        ]),
    ).toEqual([4, 4, 4, 7, 7, 7, 1, 1, 2]);
});
