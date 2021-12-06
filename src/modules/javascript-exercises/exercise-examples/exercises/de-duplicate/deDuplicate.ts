// Given an array of strings, remove all the duplicated strings

export function deDuplicate(phrase: string): string {
    const words = phrase.split(" ");
    const uniqueWords: Record<string, boolean> = {};

    return words
        .filter((word) => {
            if (uniqueWords[word]) {
                return false;
            }
            uniqueWords[word] = true;
            return true;
        })
        .join(" ");
}
