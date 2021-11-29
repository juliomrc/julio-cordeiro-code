import { numberOfChangedValuesRequiredToSort } from "./numberOfChangedValuesRequiredToSort";

test("Number of changed values required to sort", () => {
    expect(numberOfChangedValuesRequiredToSort([1, 2, 3])).toBe(0);
    expect(numberOfChangedValuesRequiredToSort([2, 2, 3])).toBe(0);
    expect(numberOfChangedValuesRequiredToSort([2, 1, 3])).toBe(2);
    expect(numberOfChangedValuesRequiredToSort([3, 1, 2, 5, 4])).toBe(5);
});
