var maximumSwap = function(num) {
    if (!num) return num;
    let nums = (num + "").split("");
    let arr = [...new Array(nums.length)].map(a => []);
    arr[arr.length-1].push(nums.length-1, parseInt(nums[nums.length-1])) // idx, val
    for (let i = nums.length-2; i >= 0; i--) {
        let [prevIdx, prevVal] = arr[i+1];
        if (parseInt(nums[i]) > prevVal) {
            arr[i].push(i, parseInt(nums[i]));
        } else if (parseInt(num[i]) === prevVal) {
            arr[i].push(prevIdx, prevVal)
        } else {
            arr[i].push(prevIdx, prevVal)
        }
    }

    for (let i = 0; i < nums.length-1; i++) {
        let [prevIdx, prevVal] = arr[i+1];

        if (parseInt(nums[i]) < prevVal) {
            [nums[i], nums[prevIdx]] = [nums[prevIdx], nums[i]]
            break
        }
    }
    return parseInt(nums.join(""));
};