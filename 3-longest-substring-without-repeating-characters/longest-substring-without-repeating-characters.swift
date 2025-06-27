class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var charMap:[Character: Int] = [:], maxLength = 0
        var lo: String.Index = s.startIndex, hi: String.Index = s.startIndex

        while hi < s.endIndex {
            if charMap[s[hi]] == nil { charMap[s[hi]] = 0}
            charMap[s[hi]]! += 1
            while charMap[s[hi]]! > 1 {
                charMap[s[lo]]! -= 1
                lo = s.index(after: lo)
            }
            hi = s.index(after: hi)
            maxLength = max(maxLength, s.distance(from: lo, to: hi))
        }
        return maxLength
    }
}