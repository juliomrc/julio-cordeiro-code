/* eslint-disable */
// this type https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function

export function customBind(
    this: Function,
    context: unknown,
    ...args: Array<unknown>
) {
    const self = this;

    return function (...functionArgs: Array<unknown>) {
        return self.call(context, ...[...args, ...functionArgs]);
    };
}

export function customCall(
    this: Function,
    context: Object | null,
    ...args: Array<unknown>
) {
    const newObj = {
        ...context,
        callerFunction: this,
    };

    return newObj.callerFunction(...args);
}
