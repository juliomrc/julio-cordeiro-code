import { maxWoodLength } from "./maxWoodLength";

test("Max wood length", () => {
    expect(maxWoodLength([4, 4, 4], 3)).toBe(4);
    expect(maxWoodLength([8, 8, 8, 8], 4)).toBe(8);
    expect(maxWoodLength([5, 9, 7], 3)).toBe(5);
    expect(maxWoodLength([5, 9, 7], 4)).toBe(4);
    expect(maxWoodLength([2], 3)).toBe(0);
});
