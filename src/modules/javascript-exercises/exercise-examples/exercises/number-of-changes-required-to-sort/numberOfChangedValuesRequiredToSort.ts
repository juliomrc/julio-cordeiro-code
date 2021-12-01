// Given a number[] arr, determine the number of changed values required to sort the array

export function numberOfChangedValuesRequiredToSort(arr: number[]) {
    const sortedArray = arr.map((value) => value).sort();

    let numberOfChangedValues = 0;

    arr.forEach((originalValue, index) => {
        const sortedValue = sortedArray[index];
        if (originalValue != sortedValue) {
            numberOfChangedValues++;
        }
    });

    return numberOfChangedValues;
}
