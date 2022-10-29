/**
 * Time: O(n) where n is the smaller between n and m
 * Space: O(1)
 */
var getSum = function(a, b) {
    while (a & b) {
        let tempB = b, tempA = a
        b ^= tempA
        a = ((tempA & tempB) << 1)
    }
    return a ^ b
};
