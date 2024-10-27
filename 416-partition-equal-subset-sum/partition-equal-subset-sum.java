class Solution {
    public boolean canPartition(int[] nums) {
        int n = nums.length; int sum = 0;
        for (int num : nums) sum += num;
        
        if (sum % 2 != 0) return false;
        sum = (int) Math.floor(sum / 2);
        boolean[][] dp = new boolean[n+1][sum+1];
        for (boolean[] arr: dp) arr[0] = true;

        for (int r = 1; r < dp.length; r++) {
            for (int c = 1; c < dp[r].length; c++) {
                if (c - nums[r-1] >= 0) {
                    dp[r][c] = dp[r-1][c - nums[r-1]] || dp[r-1][c];
                } else {
                    dp[r][c] = dp[r-1][c];
                }
            }
        }
        return dp[dp.length-1][dp[0].length-1];
    }
}