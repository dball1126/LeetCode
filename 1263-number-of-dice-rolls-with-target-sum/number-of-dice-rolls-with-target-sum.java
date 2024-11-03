class Solution {
    public int numRollsToTarget(int n, int k, int target) {
        int[][] dp = new int[n+2][target+2];
        dp[0][0] = 1; // base case with target of zero and zero dice
        int mod = (int)Math.floor(Math.pow(
            10, 9) + 7);
        for (int i = 1; i <= n; i++) {
            for (int t = 1; t <= target; t++) {
                int ways = 0;
                for (int j = 1; j <= k; j++) {
                    if (t - j >= 0) {
                        ways += dp[i-1][t - j];
                        ways %= mod;
                    }
                }
                dp[i][t] = ways;
            }
        }
        return dp[n][target];
    }
}