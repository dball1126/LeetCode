/**
 * Time: O(n)
 * Space: O(1)...32 bits
 */
var majorityElement = function(nums) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let ones = 0, zeros = 0;
        nums.forEach(n => {
            if (n & (1 << i)) {
                ones++
            } else {
                zeros++
            }
        })
        if (ones > zeros) {
            result |= (1 << i)
        }
    }
    return result
};