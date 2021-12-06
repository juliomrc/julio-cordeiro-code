// Given a function fn: (...args: any) => T, transform it into a "promise" function that returns a Promise<T>

export function promisify<TResponse, TArgs>(
    fn: (...args: TArgs[]) => TResponse,
): (...args: TArgs[]) => Promise<TResponse> {
    return (...args: TArgs[]) => {
        return new Promise((resolve, reject) => {
            try {
                const result = fn(...args);
                resolve(result);
            } catch (exception) {
                reject(exception);
            }
        });
    };
}
