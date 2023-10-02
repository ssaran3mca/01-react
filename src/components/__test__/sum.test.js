import { sum } from "../sum";

test("Testing this page", () => {
    const result = sum(3, 4);


    expect(result).toBe(7);
});