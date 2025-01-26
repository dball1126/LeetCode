var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let triplets = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i+1;
        let k = nums.length-1;

        while (j < k) {
            let val = nums[i] + nums[j] + nums[k];
            if ((nums[i] + nums[j] + nums[k]) === 0) {
                triplets.push([nums[i] , nums[j] , nums[k]]);
            }
            if (val >= 0) {
                while(k > j && nums[k-1] === nums[k]) k--;
                k--;
            } else {
                while (j < k && nums[j] === nums[j+1]) j++;
                j++;
            }
        }
        while (i < nums.length && nums[i] === nums[i+1]) i++;
    }
    return triplets;
};