class Solution {
   public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0 || strs[0] == "") return "";
        String longest = "";
        int n = strs[0].length();

        for(int i = 0; i < strs.length; i++) {
            n = Math.min(n, strs[i].length());
        }

        for (int i = 0; i < n; i++) {
            boolean valid = true;
            
            char c = strs[0].charAt(i);

            for (int j = 0; j < strs.length; j++) {
                if (strs[j].charAt(i) != c) {
                    valid = false; break;
                }
            }
            if (valid) {
                longest += c;
            } else {
                break;
            }
        }     
        return longest;
    }
}