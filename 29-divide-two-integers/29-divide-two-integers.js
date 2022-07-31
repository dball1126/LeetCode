/**
 * bit manipulation
 * O(1) time and space
 */
 var divide = function(n, d) {
    if (n === 0 || d === 0) return 0
    let isNegative = false;
    let result = 0;
    if ((d < 0 || n < 0) && !(d < 0 && n < 0)) isNegative = true;
    n = Math.abs(n)
    d = Math.abs(d)

    while (n >= d) {
        let count = 1, temp = n, tempd = d
        while (tempd <= (temp >> 1)){
            count <<= 1
            temp >>= 1
            tempd <<= 1
        }
        result += count
        n -= tempd
    }
    if (isNegative) return -result
    if (result >= 2147483648) {
        return 2147483648 - 1
    }
    return result
};