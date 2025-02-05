var findGCD = function(nums) {
    let min = Infinity, max = -Infinity;
    nums.forEach(n => {
        max = Math.max(max, n);
        min = Math.min(min, n);
    })
    while (max % min !== 0) {
        const temp = min;
        min = max % min;
        max = temp;
    }
    return min;
};