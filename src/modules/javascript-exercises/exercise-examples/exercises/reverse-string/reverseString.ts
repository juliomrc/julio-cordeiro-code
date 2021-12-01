export function traditionalReverseString(phrase: string) {
    let reversedString = "";

    for (let i = phrase.length - 1; i >= 0; i--) {
        reversedString += phrase[i];
    }
    return reversedString;
}

export function shortReverseString(phrase: string) {
    return phrase.split("").reverse().join("");
}
