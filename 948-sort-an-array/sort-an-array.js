/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Iterative in-place Quick Sort:
// Time: O(n * log(n))
// Space: O(log(n)) 
const sortArray = (nums) => {
   const n = nums.length;
   const queue = [[0, n-1]]
   while (queue.length) {
    const [LC, RC] = queue.shift();
    let l = LC, r = RC, pivot = nums[Math.floor((RC + LC) / 2)]
    while (l <= r) {
        while (nums[l] < pivot) l++
        while (nums[r] > pivot) r--
        if (l <= r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++; r--;
        }
    }
    if ((l-1) > LC) queue.push([LC, l-1])
    if (l < RC) queue.push([l, RC])
   }
   return nums;
}