// Sort a matrix first by number of repetitions and if equal then by value

export function sortMatrixByNumberOfRepetitionsAndByValue(matrix: number[][]) {
    const uniqueValuesCount: Record<string, number> = {};

    matrix.forEach((row) => {
        row.forEach((value) => {
            if (!uniqueValuesCount[value]) {
                uniqueValuesCount[value] = 1;
            } else {
                uniqueValuesCount[value] += 1;
            }
        });
    });

    const sortedUniqueValues = Object.keys(uniqueValuesCount).sort(
        (uniqueValueA, uniqueValueB) => {
            if (
                uniqueValuesCount[uniqueValueA] ===
                uniqueValuesCount[uniqueValueB]
            ) {
                return parseInt(uniqueValueA, 10) - parseInt(uniqueValueB, 10);
            }
            return (
                uniqueValuesCount[uniqueValueB] -
                uniqueValuesCount[uniqueValueA]
            );
        },
    );

    return sortedUniqueValues.reduce((sortedValues, uniqueValue) => {
        return [
            ...sortedValues,
            ...Array(uniqueValuesCount[uniqueValue]).fill(Number(uniqueValue)),
        ];
    }, [] as number[]);
}
