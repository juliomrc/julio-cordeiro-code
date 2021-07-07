export const fetchMock = async <TResponse, TError>(
    duration: number,
    response?: TResponse,
    shouldFail = false,
    error?: TError,
) => {
    const fetchMockResponse = await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(error);
            } else {
                resolve(response);
            }
        }, duration);
    });

    return fetchMockResponse as TResponse;
};
