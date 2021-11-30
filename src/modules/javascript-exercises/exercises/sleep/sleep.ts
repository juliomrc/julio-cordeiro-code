export function sleep(timeout: number): Promise<void> {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(undefined);
        }, timeout);
    });

    return promise;
}
