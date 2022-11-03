/** Bit Manipulation
 * Time: O(max(s, t))
 * Space: O(1)
 */
var findTheDifference = function(s, t) {
    let diff
    for (let i = 0; i < t.length; i++) {
        const tEle = t[i].charCodeAt();
        const sEle = s[i] ? s[i].charCodeAt() : ""
        let val = tEle ^ sEle
        diff ^= val
    }
    return String.fromCharCode(diff)
};


