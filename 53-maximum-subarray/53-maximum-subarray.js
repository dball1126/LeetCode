/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (n) => {
    if (!n.length) return 0;
    let max = n[0];
    for (let i = 1; i < n.length; i++) {
        if (n[i] + n[i-1] > n[i])
            n[i] = n[i] + n[i-1]
        
        max = Math.max(max, n[i])
    }
    return max
}