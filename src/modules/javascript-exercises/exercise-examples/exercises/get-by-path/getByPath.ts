// Function that gets the value of an object / array by a provided path

// ## Notes
// taken from ramda: https://ramdajs.com/docs/#path

// e.g:
// path(['a', 'b'], {a: {b: 2}}); // => 2
// path('a', {a: {b: 2}}); // => {b: 2}
// path(['a', 'b'], {c: {b: 2}}); // => undefined
// path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); // => 1

type Path = string | number | Array<string | number>;
type IObject = Record<string, unknown> | Array<unknown>;

export function getByPath(
    path: Path,
    objectToSearch: IObject,
): unknown | string | number | IObject {
    if (Array.isArray(path)) {
        let isValidPath = true;
        const finalValue = path.reduce((acc, newAttribute) => {
            const nestObj = acc[newAttribute as keyof typeof acc];

            if (!nestObj) {
                isValidPath = false;
                return {};
            }

            return nestObj as IObject;
        }, objectToSearch);

        return isValidPath ? finalValue : undefined;
    }

    return objectToSearch[path as keyof typeof objectToSearch];
}
