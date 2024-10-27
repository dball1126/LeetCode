class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> idxs = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (idxs.containsKey(nums[i])) {
                Integer num = nums[i];
                Integer idx2 = idxs.get(num);
                if (Math.abs(i - idx2) <= k) return true;
                idxs.put(num, i);
            } else {
                idxs.put(Integer.valueOf(nums[i]), i);
            }
        }
        return false;
    }
}