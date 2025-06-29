class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var maxLength: Int = 0, charMap:[Character: Int] = [:]
        var lo = s.startIndex, hi = s.startIndex;
        while hi < s.endIndex {
            charMap[s[hi], default: 0] += 1
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