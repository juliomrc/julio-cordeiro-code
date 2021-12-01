import { simpleDebounce } from "./simpleDebounce";

jest.useFakeTimers();

describe("Debounce", () => {
    it("Calls function after timeout", () => {
        const mock = jest.fn();
        const debouncedFn = simpleDebounce(mock, 1000);
        debouncedFn();

        expect(mock).not.toHaveBeenCalled();

        jest.runAllTimers();

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it("Calls function once if the timeout has not passed", () => {
        const mock = jest.fn();
        const debouncedFn = simpleDebounce(mock, 1000);
        debouncedFn();
        debouncedFn();
        debouncedFn();
        debouncedFn();

        expect(mock).not.toHaveBeenCalled();

        jest.runAllTimers();

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it("Calls function each time if timeout passes", () => {
        const mock = jest.fn();
        const debouncedFn = simpleDebounce(mock, 1000);

        debouncedFn();
        expect(mock).not.toHaveBeenCalled();
        jest.runAllTimers();

        debouncedFn();
        jest.runAllTimers();

        debouncedFn();
        jest.runAllTimers();

        expect(mock).toHaveBeenCalledTimes(3);
    });
});
