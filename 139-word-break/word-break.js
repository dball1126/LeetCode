var wordBreak = function(s, wordDict) {
    
    let dp = [...new Array(s.length+1)].fill(false);
    dp[s.length] = true;
    let wordSet = new Set();
    for (let w of wordDict) wordSet.add(w);

    for (let i = s.length-1; i >= 0; i--) {
        for (let j = s.length-1; j >= i; j--) {
            let substring = s.substring(i, j+1);
            if (wordSet.has(substring)) {
                dp[i] = dp[i] || dp[i +substring.length];
            }
        }
    }
    return dp[0];
};