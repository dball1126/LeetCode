/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    let n = tasks.length, memo = new Map()
    let done = (1 << n) - 1 // also our max visited metric
    
    const dp = (mask, t) => {
        if (mask === done) return 0;
        let ans = Infinity, k = mask +':' + t;
        if (memo.has(k)) return memo.get(k);
        if (t !== sessionTime) {
            ans = dp(mask, sessionTime) + 1
        }

        for (let i = 0; i < n; i++) {
            let v = tasks[i]
            if (t -v >= 0 && (mask & (1 << i)) === 0) {
                ans = Math.min(ans,
                    dp(mask | (1 << i), t - v))
            }
        }
        memo.set(k, ans)
        return ans
    }
    return dp(0,0)
}