// https://www.geeksforgeeks.org/maximum-length-possible-by-cutting-n-given-woods-into-at-least-k-pieces/
// Given an array woods[] of size N, representing the length of N pieces of wood and an integer K,
// at least K pieces of the same length need to be cut from the given wooden pieces.
// The task is to find the maximum possible length of these K wooden pieces that can be obtained.
// Approach: Binary tree

export function maxWoodLength(woods: number[], k: number) {
    let right = Math.max(...woods);
    let left = 1;
    let mid;
    let result;

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (isValid(mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Check edge case when left === right
    if (isValid(right)) {
        result = right;
    }

    function isValid(woodLength: number) {
        let count = 0;
        for (const wood of woods) {
            count += Math.floor(wood / woodLength);
        }
        return count >= k;
    }

    return result ?? 0;
}
