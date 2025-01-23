var topKFrequent = function(nums, k) {
    if (k === nums.length) return nums
    let map = new Map();
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0);
        map.set(n, map.get(n) + 1);
    }
    let arr = Array.from(map);
    return quickSelect(0, arr.length-1, arr, arr.length - k);
};

const quickSelect = (left, right, nums, k) => {
    let partition = getPartition(left, right, nums);

    while (partition !== k) {
        partition = getPartition(left, right, nums);
        if (partition > k) {
            right = partition - 1;
        } else if (partition < k) {
            left = partition + 1;
        }
    }
    return nums.slice(k).map(a => a[0])
}

const getPartition = (left, right, nums) => {
    let partition = nums[right][1], i = left, j = right -1;

    while (i <= j) {
        while (nums[i] && nums[i][1] < partition) i++;
        while (nums[j] && nums[j][1] > partition) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}