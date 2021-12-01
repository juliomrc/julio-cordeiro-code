// sharedEntries - a function that given two iterable objects will return an array of shared elements.
// sharedEntries([1, 1, 1, 2], [1, 1, 2]) // => [1, 1, 2]

export function sharedEntries<T extends unknown>(
    iter1: IterableIterator<T>,
    iter2: IterableIterator<T>,
): Array<T> {
    const array1 = Array.from(iter1);
    const array2 = Array.from(iter2);

    const sharedElements: Array<T> = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                const [sharedElement] = array2.splice(j, 1);
                sharedElements.push(sharedElement);
                break;
            }
        }
    }

    return sharedElements;
}
