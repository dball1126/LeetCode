/**
 * @param {number} n
 * @return {number}
 */
// Digit DP
// Time: O(n * 10)...n being the length of n
// Time & Space: O(10 * log(n))
var countDigitOne = function(n) {
    n += ""
    let len = n.length;
    let memo = new Map()
    const dp = (idx, tight, sum) => {
        if (idx >= len) return sum;
        let k = idx + ":" + sum + ":" + tight
        if (memo.has(k)) return memo.get(k)
        let maxD = 9
        if (tight) maxD = parseInt(n[idx])
        let ans = 0;
        for(let i = 0; i <= maxD; i++ ) {
            let newTight = tight && i === maxD ? true : false;
            let x = i === 1 ? 1 : 0
            ans += dp(idx+1, newTight, sum + x)  
        }
        memo.set(k, ans)
        return ans
    }
    return dp(0, true, 0)
};