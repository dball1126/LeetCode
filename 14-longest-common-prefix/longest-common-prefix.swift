class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        var longest: String = "", idxs = strs[0].indices
        if strs.count == 0 { return ""}
        if strs.count == 1 { return strs[0] }
        for i in idxs {
            for j in 1..<strs.count {
                var prev: String = strs[j-1], curr: String = strs[j]
                if i < prev.endIndex && i < curr.endIndex && prev[i] == curr[i] {

                } else { return longest }
            }
            longest += String(strs[0][i])
        }
        return longest
    }
}