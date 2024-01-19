/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let prefixSum = 0, map = new Map(), count = 0, n = nums.length;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        
        if (prefixSum === goal) count++;

        if (prefixSum >= goal && map.has(prefixSum - goal)) {
            count += map.get(prefixSum - goal)
        }

        if (!map.has(prefixSum)) map.set(prefixSum, 0)
        map.set(prefixSum, 1 + map.get(prefixSum))
    }

    return count;
};