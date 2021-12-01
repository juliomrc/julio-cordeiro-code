export const traverseMatrixSpiral = (matrix: number[][]) => {
    if (!matrix?.length) {
        return [];
    }

    const traversedItems: number[] = [];

    const numberOfColumns = matrix[0].length;
    const numberOfRows = matrix.length;

    let row = 0;
    let column = 0;

    while (column < numberOfColumns) {
        traversedItems.push(matrix[row][column]);
        column++;
    }
    row = 1;
    column = numberOfColumns - 1;
    while (row < numberOfRows) {
        traversedItems.push(matrix[row][column]);
        row++;
    }
    row = numberOfRows - 1;
    column = numberOfColumns - 2;
    while (column >= 0) {
        traversedItems.push(matrix[row][column]);
        column--;
    }
    row = numberOfRows - 2;
    column = 0;
    while (row > 0) {
        traversedItems.push(matrix[row][column]);
        row--;
    }

    if (numberOfRows > 2) {
        const innerMatrix = matrix.slice(1, numberOfRows - 1).map((row) => {
            return row.slice(1, numberOfColumns - 1);
        });
        traversedItems.push(...traverseMatrixSpiral(innerMatrix));
    }

    return traversedItems;
};
