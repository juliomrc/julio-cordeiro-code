/*
    Testing:
    To isolate the rabbit behavior from the finding the rabbit algorithm
    we can produce an iterator like* object for the rabbit positions.

    After the rabbit is found, the exercise is over and the rabbit does not jump again. 
    After that, independently of the hole checked, we will always return the actual rabbit position.

    * Iterator "like", as we apply the same principles of closure, but applied to our example
*/

interface CheckIfRabbitIsInHoleResult {
    rabbitPosition: number | undefined;
    foundTheRabbit: boolean;
}

export type CheckIfRabbitIsInHole = (
    holePosition?: number,
) => CheckIfRabbitIsInHoleResult;

export function lineOfHolesWithJumpingRabbit(
    initialPosition: number,
    noOfHoles: number,
) {
    let rabbitPosition = initialPosition;
    let foundTheRabbit = false;

    function jump() {
        if (rabbitPosition === 0) {
            rabbitPosition++;
        } else if (rabbitPosition === noOfHoles) {
            rabbitPosition--;
        } else if (Math.random() >= 0.5) {
            rabbitPosition++;
        } else {
            rabbitPosition--;
        }
    }

    function checkIfRabbitIsInHole(
        holePosition?: number,
    ): CheckIfRabbitIsInHoleResult {
        if (holePosition === rabbitPosition || foundTheRabbit) {
            foundTheRabbit = true;
            return { rabbitPosition, foundTheRabbit };
        }

        jump();

        return { rabbitPosition: undefined, foundTheRabbit };
    }

    return {
        noOfHoles,
        getRabbitPosition() {
            return rabbitPosition;
        },
        checkIfRabbitIsInHole,
    };
}
