/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.prefixsums = [];
    for (let n of w) {
        this.sum += n;
        this.prefixsums.push(this.sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let weight = Math.random() * this.sum;

    let lo = 0, hi = this.prefixsums.length -1;

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2);

        if (weight > this.prefixsums[m]) {
            lo = m + 1
        } else {
            hi = m;
        }
    }
    return lo
};