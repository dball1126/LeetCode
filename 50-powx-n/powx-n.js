/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if (n < 0) {
        x = 1 / x
        n *= -1
    }
    let pow = x, result = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            result *= pow;
            n-=1;
        }
        pow *= pow;
        n = Math.floor( n / 2);
    }
    return result;
};