export async function customTest(title: string, callback: () => void) {
    try {
        await callback();
        console.log(`✓ ${title}`);
    } catch (err) {
        console.log(`✗ ${title}`);
        console.log(err);
    }
}

export function customExpect(currentValue: unknown) {
    const toBe = (expectedValue: unknown) => {
        if (currentValue !== expectedValue) {
            throw `Got ${currentValue} and expected it to be ${expectedValue}`;
        }
    };

    return {
        toBe,
    };
}
