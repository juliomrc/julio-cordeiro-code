/*
    Problem: 
    There are N holes in a line, and there is a rabbit hiding in one of the holes
    You can only look in one hole at a time.
    Every time you look in a hole, the rabbit jumps to an adjacent hole. 
    Find the rabbit.
*/

import { CheckIfRabbitIsInHole } from "./lineOfHolesWithJumpingRabbit";

export function findTheRabbit(
    checkIfRabbitIsInHole: CheckIfRabbitIsInHole,
    noOfHoles: number,
) {
    for (let i = 0; i < noOfHoles; i++) {
        const { foundTheRabbit, rabbitPosition } = checkIfRabbitIsInHole(i);
        if (foundTheRabbit) {
            return rabbitPosition;
        }
    }

    for (let i = 1; i < noOfHoles; i++) {
        const { foundTheRabbit, rabbitPosition } = checkIfRabbitIsInHole(i);
        if (foundTheRabbit) {
            return rabbitPosition;
        }
    }

    // :(
    return -1;
}

/*
    Thought process:

    What do we know?
    If rabbit starts in pos = 50
    After first jump he can be in [49, 51]
    After second jump he can be in [48, 50, 52]
    After third jump he can be in [47, 49, 51, 53]
    ...
    Rabbit oscillates between even <-> odd positions.

    This algorithm does not work, and I could not (yet) write another one that works.
    Building the test case was interesting enough, though :)
*/
