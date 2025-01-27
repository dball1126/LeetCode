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
    let weight = Math.ceil(Math.random() * this.sum);

    let lo = 0, hi = this.prefixSums.length - 1;

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2);

        if (weight > this.prefixSums[m]) {
            lo = m + 1;
        } else {
            hi = m;
        }
    }
    return lo;
};
