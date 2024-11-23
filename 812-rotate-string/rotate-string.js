/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// Two Pointer
// Time: O(n)
// Space: O(1)
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    let i = 0, j = 0

    while (j < goal.length || i < s.length) {
        if (i >= goal.length) { // Final check. Check if rotations worked.
            i = 0;
            while ( j < goal.length) {
                if (s[i] !== goal[j]) return false;
                i++; j++;
            }
            return true
        } 
        if (s[i] === goal[j]) {
            i++; j++;
        } else { // rotate
            i++;
        }
    }
    return i === j
};