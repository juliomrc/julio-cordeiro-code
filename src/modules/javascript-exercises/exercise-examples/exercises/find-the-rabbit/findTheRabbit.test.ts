import { findTheRabbit } from "./findTheRabbit";
import { lineOfHolesWithJumpingRabbit } from "./lineOfHolesWithJumpingRabbit";

describe("Find the rabbit", () => {
    it("Finds the rabbit in 4 holes", () => {
        const it = lineOfHolesWithJumpingRabbit(2, 4);

        const position = findTheRabbit(it.checkIfRabbitIsInHole, it.noOfHoles);
        expect(position).toBe(it.getRabbitPosition());
    });
    it("Finds the rabbit in 50 holes", () => {
        const it = lineOfHolesWithJumpingRabbit(25, 50);

        const position = findTheRabbit(it.checkIfRabbitIsInHole, it.noOfHoles);
        expect(position).toBe(it.getRabbitPosition());
    });
    it("Finds the rabbit in 100 holes", () => {
        const it = lineOfHolesWithJumpingRabbit(50, 100);

        const position = findTheRabbit(it.checkIfRabbitIsInHole, it.noOfHoles);
        expect(position).toBe(it.getRabbitPosition());
    });

    test.each(
        [...Array(5)].map(() => [
            Math.round(Math.random() * 99),
            Math.round(Math.random() * 100),
        ]),
    )("Finds the rabbit for random lengths", (initialPosition, noOfHoles) => {
        const it = lineOfHolesWithJumpingRabbit(initialPosition, noOfHoles);

        const position = findTheRabbit(it.checkIfRabbitIsInHole, it.noOfHoles);
        expect(position).toBe(it.getRabbitPosition());
    });
});
