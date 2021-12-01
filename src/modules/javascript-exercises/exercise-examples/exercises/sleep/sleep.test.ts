import { sleep } from "./sleep";

const dateToEpoch = (date: number) => Math.round(date / 1000);

describe("Sleep", () => {
    it("Waits for execution for a given amount", async () => {
        jest.useRealTimers();
        const timeout = 500;
        const timeStamp = dateToEpoch(Date.now());
        await sleep(timeout);
        const newTime = dateToEpoch(Date.now() - timeout);

        expect(newTime).toBeCloseTo(timeStamp);
    });

    it("Waits for execution for zero amount", async () => {
        jest.useRealTimers();

        const timeStamp = dateToEpoch(Date.now());
        await sleep(0);
        const newTime = dateToEpoch(Date.now());

        expect(newTime).toBeCloseTo(timeStamp);
    });
});
