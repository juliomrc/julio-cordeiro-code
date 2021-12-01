export const zigZagTraverseArrayDiagonally = (matrix: number[][]) => {
    if (!matrix?.length) {
        return [];
    }

    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0].length;

    let row = 0;
    let column = 0;
    let goingUp = true;

    const traversedItems: number[] = [];

    for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
        traversedItems.push(matrix[row][column]);
        if (goingUp) {
            if (row === 0 && column < numberOfColumns - 1) {
                column++;
                goingUp = false;
            } else if (column === numberOfColumns - 1) {
                row++;
                goingUp = false;
            } else {
                row--;
                column++;
            }
        } else {
            if (row == numberOfRows - 1 && column > 0) {
                column++;
                goingUp = true;
            } else if (column === 0) {
                row++;
                goingUp = true;
            } else {
                row++;
                column--;
            }
        }
    }

    return traversedItems;
};
