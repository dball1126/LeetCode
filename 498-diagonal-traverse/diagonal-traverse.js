/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let n = nums.length, m = nums[0].length, result = [], dir = 'upRight';
    let r = 0, c = 0;

    while (r <= n-1 && c <= m-1) {
        result.push(nums[r][c]);
        if (r === n-1 && c === m-1) break;

        if (dir === 'upRight') {
            while (r-1 >= 0 && c+1 < m) {
                r--; c++;
                result.push(nums[r][c]);
            }
            if (c+1 < m) {
                c++;
            } else if (r+1 < n) {
                r++;
            }
        } else if (dir === 'downLeft') {
            while (r+1 < n && c-1 >= 0) {
                r++; c--;
                result.push(nums[r][c]);
            }
            if (r+1 < n) {
                r++;
            } else if (c +1 < m) {
                c++;
            }
        }
        dir = dir === 'downLeft' ? 'upRight' : 'downLeft';
    }
    return result;
};