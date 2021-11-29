// Given an array number[n]
// Determine if we can we make the array sorted ascending by swapping at most one digit in one of the array indexes
// Example:
// [0, 10, 2] => [0, 01, 2] => works
// [101, 10, 90] => does not work

export function atMostOneDigitSwap(arr: number[]) {
    function checkIfOneDigitSwapWorks(index: number) {
        const arrayValueAsStringDigits = arr[index].toString().split("");
        const previousValue = arr[index - 1];
        const nextValue = arr[index + 1];

        for (let i = 0; i < arrayValueAsStringDigits.length - 1; i++) {
            const firstDigitToSwap = arrayValueAsStringDigits[i];

            for (let j = i; j < arrayValueAsStringDigits.length; j++) {
                const secondDigitToSwap = arrayValueAsStringDigits[j];
                const arrayCopy = [...arrayValueAsStringDigits];
                arrayCopy[i] = secondDigitToSwap;
                arrayCopy[j] = firstDigitToSwap;
                const swappedNumber = parseInt(arrayCopy.join(""), 10);

                if (
                    (!previousValue || swappedNumber >= previousValue) &&
                    swappedNumber <= nextValue
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    let alreadyHasOneDigitSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            if (alreadyHasOneDigitSwap || !checkIfOneDigitSwapWorks(i)) {
                return false;
            }
            alreadyHasOneDigitSwap = true;
        }
    }

    return true;
}
