export function simpleDebounce(func: () => void, wait: number) {
    let timer: NodeJS.Timeout;
    return function debouncedFunc() {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, wait);
    };
}
