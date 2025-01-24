var findMissingRanges = function(nums, lower, upper) {
    if (!nums.length) return [[lower,upper]]
    const missingRanges = [];
    for (let n of nums) {
        if (lower < n) {
            missingRanges.push([lower,n-1]);
        }
        lower = n+1;
    }
    if (lower <= upper) {
        missingRanges.push([lower, upper]);
    }
    return missingRanges;
};