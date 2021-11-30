type NestedArray<T> = T | Array<NestedArray<T>>;

export function flattenArray<T>(array: Array<NestedArray<T>>): Array<T> {
    const flattenedArray: Array<T> = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenedArray.push(
                ...flattenArray(array[i] as Array<NestedArray<T>>),
            );
        } else {
            flattenedArray.push(array[i] as T);
        }
    }

    return flattenedArray;
}
