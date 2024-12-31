/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const diags = new Map()
    let result = [];
    for (let r = nums.length-1; r >=0; r--) {
        for (let c = nums[r].length-1; c >= 0; c--) {
            let key = r + c
            if (!diags.has(key)) diags.set(key, [])
            diags.get(key).push(nums[r][c])
        }
    }

    let i = 0;
    while (diags.has(i)) {
        result.push(...diags.get(i))
        i++
    }
    return result;
};