class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var map: [Character:Int] = [:], lo: String.Index = s.startIndex, hi: String.Index = lo
        var longestSub: Int = 0
        while hi < s.endIndex {
            map[s[hi], default: 0] += 1
            while map[s[hi]]! > 1 {
                map[s[lo]]! -= 1
                if map[s[lo]] == 0 { map[s[lo]] = nil }
                lo = s.index(after: lo)
            }
            hi = s.index(after: hi)
            longestSub = max(longestSub, s.distance(from: lo, to: hi))
        }
        return longestSub
    }
}