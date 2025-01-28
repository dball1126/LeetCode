var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0);
        map.set(n, map.get(n) + 1);
    }
    let arr = Array.from(map);
    return quickSelect(0, arr.length-1, arr, arr.length - k);
};
const quickSelect = (left, right, nums, k) => {
    let idx = getPartition(left, right, nums);
    while (idx !== k) {
        idx = getPartition(left, right, nums);

        if (idx < k) {
            left = idx +1;
        } else {
            right = idx - 1;
        }
    }
    return nums.slice(k).map(a => a[0]);
}
const getPartition = (left, right, nums) => {
    let i = left, j = right -1, partition = nums[right];
    while (i <= j) {
        while (nums[i] && nums[i][1] < partition[1]) i++;
        while (nums[j] && nums[j][1] > partition[1]) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}