/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let i = 0, j = 0
    let result = "";

    while (i < s.length || j < spaces.length) {
        if (j >= spaces.length) {
            result += s[i]
            i++;
        } else {
            while (i !== spaces[j]) {
                result += s[i]
                i++
            }
            result += " "
            j++
        }
    }

    return result;
};