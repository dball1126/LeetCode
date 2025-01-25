var majorityElement = function(nums) {
    let marjoityEle = 0;
    for (let i = 0; i < 32; i++) {
        let mask = (1 << i);
        let ones = 0;
        nums.forEach(v => {
            if (v & mask) ones++;
        })
        if (ones > (nums.length/2)) {
            marjoityEle |= (1 << i);
        }
    }
    return marjoityEle;
};