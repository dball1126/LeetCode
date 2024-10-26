class Solution {
    public int search(int[] nums, int target) {
        int low = 0; int high = nums.length-1;

        while (low <= high) {
            int m = ((int) Math.floor((high+low) / 2) );
      

            if (nums[m] == target)             {
                return m;
            } else if (target < nums[m]) {
                high = m -1;
            } else {
                low = m+1;
            }
        }

        return -1;
    }
}