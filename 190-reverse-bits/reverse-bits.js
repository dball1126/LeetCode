/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bits = (n >>> 0).toString(2);
    let bitStr = "", j = bits.length-1
    for (let i = 0; i < 32; i++) {
        bitStr += (j >= 0 ? bits[j] : 0)
        j--
    }
    return parseInt(bitStr, 2)
};