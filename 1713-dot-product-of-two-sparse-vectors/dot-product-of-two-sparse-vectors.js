/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.vector = new Map();
    this.maxLength = 0;
    nums.forEach((v, i) => {
        if (v !== 0) {
            this.vector.set(i, v);
            this.maxLength = Math.max(this.maxLength, i)
        }
    })
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let maxLenth = Math.max(this.maxLength, vec.maxLength);
    let total = 0;
    for (let [i, v] of this.vector) {
        if (i > maxLenth) break;
        if (vec.vector.has(i)) {
            total += (v * vec.vector.get(i));
        }
    }
    return total;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);