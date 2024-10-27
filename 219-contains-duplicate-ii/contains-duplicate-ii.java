class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, List<Integer>> idxs = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (idxs.containsKey(nums[i])) {
                Integer num = nums[i];
                List<Integer> idxList = idxs.get(num);
                for (Integer j : idxList) {
                    boolean val = (Integer) Math.abs(i - j) <= k;
                    if (val) return true; 
                }
                idxList.add(i);
            } else {
                idxs.put(Integer.valueOf(nums[i]), new ArrayList<>());
                idxs.get(Integer.valueOf(nums[i])).add(i);
            }
        }
        return false;
    }
}