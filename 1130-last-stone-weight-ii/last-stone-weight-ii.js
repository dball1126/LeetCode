/**
 * @param {number[]} stones
 * @return {number}
 */
// Time and Space: O(n * m)...n for stones and m for half the total sum
var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((acc, v) => acc + v)
    let half = Math.ceil(sum / 2), n = stones.length
    let memo = [...new Array(half+1)].map(a => [...new Array(n+1)])

    const dp = (s , i) => {
        if (i >= n || s >= half) {
            let diff = sum - s
            return Math.abs(s - diff)
        }
        if (memo[s][i] !== undefined) return memo[s][i]

        let v1 = dp(s + stones[i], i+1), v2 = dp(s, i+1)
        return memo[s][i] = Math.min(v1, v2)
    }
    return dp(0, 0)
};