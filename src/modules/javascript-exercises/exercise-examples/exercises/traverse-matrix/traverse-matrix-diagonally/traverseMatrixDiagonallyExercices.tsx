export const traverseArrayDiagonally = (
    numberOfRows: number,
    numberOfColumns: number,
) => {
    const maxLength = Math.max(numberOfRows, numberOfColumns);

    for (let k = 0; k <= 2 * (maxLength - 1); k++) {
        for (let yIndex = numberOfColumns - 1; yIndex >= 0; yIndex--) {
            const xIndex = k - yIndex;

            const isIndexInsideMatrix = xIndex >= 0 && xIndex < numberOfRows;
            if (isIndexInsideMatrix) {
                console.log(xIndex, yIndex);
            }
        }
    }
};

export const traverseArrayDiagonally1 = (
    numberOfRows: number,
    numberOfColumns: number,
) => {
    for (let diagonal = 0; diagonal < numberOfRows; diagonal++) {
        let row = diagonal;
        let column = 0;

        while (row >= 0 && column < numberOfColumns) {
            console.log(row, column);
            row--;
            column++;
        }
    }

    for (let diagonal = 1; diagonal < numberOfColumns; diagonal++) {
        let row = numberOfRows - 1;
        let column = diagonal;

        while (row >= 0 && column < numberOfColumns) {
            console.log(row, column);
            row--;
            column++;
        }
    }
};

export const traverseArrayDiagonally2 = (matrix: number[][]) => {
    const diagonalValues: Record<number, number[]> = {};
    matrix.forEach((row, rowIndex) => {
        row.forEach((value, columnIndex) => {
            if (diagonalValues[rowIndex + columnIndex]) {
                diagonalValues[rowIndex + columnIndex].push(value);
            } else {
                diagonalValues[rowIndex + columnIndex] = [value];
            }
        });
    });

    Object.values(diagonalValues).forEach((diagonal) => {
        const reversedDiagonal = [...diagonal].reverse();
        reversedDiagonal.forEach((value) => {
            console.log(value);
        });
    });
};

export const traverseBottomLeft = (matrix: number[][]) => {
    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0].length;

    for (let index = numberOfRows - 1; index >= 0; index--) {
        let row = index;
        let column = numberOfColumns - 1;

        while (row < numberOfRows && column >= 0) {
            console.log(matrix[row][column]);
            row++;
            column--;
        }
    }

    for (let index = numberOfColumns - 2; index >= 0; index--) {
        let column = index;
        let row = 0;

        while (row < numberOfRows && column >= 0) {
            console.log(matrix[row][column]);
            row++;
            column--;
        }
    }
};
