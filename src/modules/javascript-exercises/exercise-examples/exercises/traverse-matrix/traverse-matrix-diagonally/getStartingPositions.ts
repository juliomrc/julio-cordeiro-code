interface LoopStartingPositions {
    rowIterationInitialRow: number;
    rowIterationInitialColumn: number;
    rowIterationIncreasing: boolean;
    columnIterationInitialRow: number;
    columnIterationInitialColumn: number;
    columnIterationIncreasing: boolean;
}

export function getLoopStartingPositions(
    isGoingDown: boolean,
    isGoingLeft: boolean,
    numberOfRows: number,
    numberOfColumns: number,
): LoopStartingPositions {
    if (isGoingDown && isGoingLeft) {
        return {
            rowIterationInitialRow: numberOfRows - 1,
            rowIterationInitialColumn: numberOfColumns - 1,
            rowIterationIncreasing: false,
            columnIterationInitialRow: 0,
            columnIterationInitialColumn: numberOfColumns - 2,
            columnIterationIncreasing: false,
        };
    }
    if (isGoingDown && !isGoingLeft) {
        return {
            rowIterationInitialRow: numberOfRows - 1,
            rowIterationInitialColumn: 0,
            rowIterationIncreasing: false,
            columnIterationInitialRow: 0,
            columnIterationInitialColumn: 1,
            columnIterationIncreasing: true,
        };
    }
    if (!isGoingDown && isGoingLeft) {
        return {
            rowIterationInitialRow: 0,
            rowIterationInitialColumn: numberOfColumns - 1,
            rowIterationIncreasing: true,
            columnIterationInitialRow: numberOfRows - 1,
            columnIterationInitialColumn: numberOfColumns - 2,
            columnIterationIncreasing: false,
        };
    }
    return {
        rowIterationInitialRow: 0,
        rowIterationInitialColumn: 0,
        rowIterationIncreasing: true,
        columnIterationInitialRow: numberOfRows - 1,
        columnIterationInitialColumn: 1,
        columnIterationIncreasing: true,
    };
}
