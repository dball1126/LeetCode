/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.prefixSums = [];
    for (let s of w) {
        this.sum += s;
        this.prefixSums.push(this.sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
    const randomSum = Math.random() * this.sum;
    let lo = 0, hi = this.prefixSums.length-1;

    while (lo < hi) {
        let m = Math.floor((hi + lo)  / 2);

        if (randomSum > this.prefixSums[m]) {
            lo = m + 1;
        } else {
            hi = m;
        }
    }
    return lo;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */