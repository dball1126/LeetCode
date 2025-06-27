class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        if strs.count == 0 { return "" }
        if strs.count == 1 { return strs[0]}
        var longest: String = ""
        var len: String = strs[0]
        
        for i in len.indices {

            for j: Int in 1..<strs.count {
                var prev = strs[j-1], curr = strs[j]
                if i < prev.endIndex && i < curr.endIndex && (String(prev[i]) == String(curr[i])) {

                } else { return longest }
            }
            longest += String(len[i])
        }
        return longest
    }
}