class Solution {
    func isPalindrome(_ s: String) -> Bool {
        var lo: String.Index = s.startIndex
        var hi: String.Index = s.index(before: s.endIndex)

        while lo < hi {
            if !(s[lo].isNumber || s[lo].isLetter) {
                lo = s.index(after: lo)
            } else if !(s[hi].isNumber || s[hi].isLetter) {
                hi = s.index(before: hi)
            } else {
                if s[lo].lowercased() != s[hi].lowercased() {
                    return false
                }
                lo = s.index(after: lo)
                hi = s.index(before: hi)
            }
        }
        return true
    }
}