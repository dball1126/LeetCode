/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if (!arr.length || arr[0] > k) return k
    let len = arr.length;
    if (arr[arr.length-1] === len) return len + k;
    
    let lo = 0, hi = len -1;

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2) + 1;
        
        let missing = (arr[m]-1 - m)

        if (missing < k) {
            lo = m
        } else {
            hi = m - 1
        }
    }
    let missingKNum = Math.abs((arr[lo]-1 - lo) - k);
    return missingKNum + arr[lo];
};