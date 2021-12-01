// If we want to start and finish with the shorter diagonals,
// we can start going on opposite directions for each corner,
// so there are 8 total options on how to diagonally traverse the array,
//
// For the sake of not overdoing it, i'll implement one direction for each corner,
// starting from rows and then columns

import { getLoopStartingPositions } from "./getStartingPositions";
import { traverseDiagonal } from "./traverseDiagonal";

type VerticalDirection = "up" | "down";
type HorizontalDirection = "right" | "left";

export const genericTraverseMatrixDiagonally = (
    matrix: number[][],
    verticalDirection: VerticalDirection = "down",
    horizontalDirection: HorizontalDirection = "left",
) => {
    if (!matrix?.length) {
        return [];
    }

    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0].length;

    const isGoingDown = verticalDirection === "down";
    const isGoingLeft = horizontalDirection === "left";

    const {
        rowIterationInitialRow,
        rowIterationInitialColumn,
        rowIterationIncreasing,
        columnIterationInitialRow,
        columnIterationInitialColumn,
        columnIterationIncreasing,
    } = getLoopStartingPositions(
        isGoingDown,
        isGoingLeft,
        numberOfRows,
        numberOfColumns,
    );

    const traversedItems: number[] = [];
    function traverseDiagonalStartingAt(row: number, column: number) {
        const diagonalItems = traverseDiagonal(
            row,
            column,
            matrix,
            numberOfRows,
            numberOfColumns,
            isGoingDown,
            isGoingLeft,
        );

        traversedItems.push(...diagonalItems);
    }

    for (
        let index = rowIterationInitialRow;
        rowIterationIncreasing ? index < numberOfRows : index >= 0;
        rowIterationIncreasing ? index++ : index--
    ) {
        const row = index;
        const column = rowIterationInitialColumn;
        traverseDiagonalStartingAt(row, column);
    }

    for (
        let index = columnIterationInitialColumn;
        columnIterationIncreasing ? index < numberOfColumns : index >= 0;
        columnIterationIncreasing ? index++ : index--
    ) {
        const column = index;
        const row = columnIterationInitialRow;
        traverseDiagonalStartingAt(row, column);
    }

    return traversedItems;
};
