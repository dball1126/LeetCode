/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    while (b !== 0) {
       let carry = (a & b) << 1
       let amount = a ^ b
       b = carry;
       a = amount;
    }
    return a;
}