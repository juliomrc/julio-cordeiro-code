export function generateUniqueRandomId(prefix: string) {
    return `${prefix}${Date.now() + Math.random()}`;
}
