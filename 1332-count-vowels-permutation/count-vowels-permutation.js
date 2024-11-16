/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time & Space: O(n)...5 is constant
var countVowelPermutation = function(n) {
    const memo = new Map(), mod = (10 ** 9) + 7
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    const dp = (curr, len) => {
        if (len >= n) return 1
        let k = curr + ":" + len
        if (memo.has(k)) {

            return memo.get(k)
        }
        let sum = 0
        for (let v of vowels) {
            if (curr === "") {
                sum += dp(v, len + 1)
            } else if (v === "a" && curr === "e") {
                sum += dp(v, len+1)
            } else if (v === "e" && (curr === "a"  || curr === "i")) {
                sum += dp(v, len+1)
            } else if (v === "i" && curr !== "i") {
                sum += dp(v, len+1)
            } else if (v === "o" && (curr === "i" || curr === "u")) {
                sum += dp(v, len+1)
            } else if ( v === "u" && curr === "a") {
                sum += dp(v, len+1)
            }
            sum %= mod
        }
        memo.set(k, sum)
        return sum
    }
    return dp("", 0)
}