/**
 * Time: O(1)...only 32 bits
 * Space: O(1)
 */
const hammingWeight = (n) => {
    let count = 0;
    while (n !== 0) {
        count++
        n = n & (n - 1)
    }
    return count;
}