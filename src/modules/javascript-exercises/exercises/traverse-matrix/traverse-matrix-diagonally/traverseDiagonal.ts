export function traverseDiagonal(
    startingRow: number,
    startingColumn: number,
    matrix: number[][],
    numberOfRows: number,
    numberOfColumns: number,
    isGoingDown: boolean,
    isGoingLeft: boolean,
) {
    const traversedItems: number[] = [];
    let row = startingRow;
    let column = startingColumn;

    while (
        row < numberOfRows &&
        row >= 0 &&
        column < numberOfColumns &&
        column >= 0
    ) {
        traversedItems.push(matrix[row][column]);

        if (isGoingDown) {
            row++;
        } else {
            row--;
        }
        if (isGoingLeft) {
            column--;
        } else {
            column++;
        }
    }

    return traversedItems;
}
