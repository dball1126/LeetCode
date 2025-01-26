/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x *= -1
    }
    let newNum = 0;

    let minRange = -(2**31), maxRange = (2**31) -1

    while (x !== 0) {
        newNum *= 10;
        newNum += (x % 10);
        if (newNum < minRange || newNum > maxRange) return 0
        x = Math.floor( x /10);
    }
    return isNegative ? -newNum : newNum;
};