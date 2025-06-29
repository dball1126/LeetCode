class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var a = Character("a").asciiValue
        var groups:[String:[String]] = [:]

        for s in strs {
            var counts: [Int] = Array(repeating: 0, count: 26)

            for (i, c) in s.enumerated() {
                var idx = Int(c.asciiValue! - a!)
                counts[idx] += 1
            }
            var key: String = ""
            for (i, v) in counts.enumerated() {
                if v > 0 {
                    key += "\(i):\(v)"
                }
            }
            groups[key, default: []].append(s)
        }

        return Array(groups.values)
    }
}