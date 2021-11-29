import { atMostOneDigitSwap } from "./atMostOneDigitSwap";

test("At most one digit swap", () => {
    expect(atMostOneDigitSwap([1, 2, 3, 4])).toBe(true);
    expect(atMostOneDigitSwap([0, 10, 2, 3])).toBe(true);
    expect(atMostOneDigitSwap([1, 10000, 2, 3])).toBe(true);
    expect(atMostOneDigitSwap([101, 10, 90])).toBe(false);
    expect(atMostOneDigitSwap([10, 23, 1])).toBe(false);
});
