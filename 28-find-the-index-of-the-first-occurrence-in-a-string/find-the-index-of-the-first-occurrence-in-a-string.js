/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let stack = []
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            stack.push(i)
        }
    }
    const checkIfValid = (i, j) => {
        while (haystack[i] === needle[j] && j < needle.length) {
            i++; j++;
        }
        return j === needle.length;
    }
    for (let i of stack) {
        if (checkIfValid(i, 0)) return i
    }
    return -1
};