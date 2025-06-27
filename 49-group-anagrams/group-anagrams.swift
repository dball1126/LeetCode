class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var groups:[String: [String]] = [:]
        var a = Character("a").asciiValue

        for s in strs {
            var counts: [Int] = Array(repeating: 0, count: 26)
            for c in s {
                var idx = Int(c.asciiValue! - a!)
                counts[idx] += 1
            }
            var key = ""
            for (i, n) in counts.enumerated() {
                if n > 0 { key += "\(i):\(n)"}
            }
            groups[key, default: []].append(s)
        }
        return Array(groups.values)
    }
}