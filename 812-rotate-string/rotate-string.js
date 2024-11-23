/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    let i = 0, j = 0

    while (j < goal.length || i < s.length) {

        if (i >= goal.length) {// final check
            i = 0;
            while ( j < goal.length) {
                if (s[i] !== goal[j]) return false;
                i++; j++;
            }
            return true
        } 
        if (s[i] === goal[j]) {
            i++; j++;
        } else {
            i++;
        }
    }
    return i === j
};