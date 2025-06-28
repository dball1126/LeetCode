class Solution {
    func findDuplicate(_ paths: [String]) -> [[String]] {
        var groups:[String:[String]] = [:]
        for path: String in paths {
            let arr = path.components(separatedBy: " ")
            for i in 1..<arr.count {
                var key: String = "", p: String = arr[0] + "/", leftIdx: String.Index = arr[i].startIndex
            
                while arr[i][leftIdx] != "(" {
                    p += String(arr[i][leftIdx])
                    leftIdx = arr[i].index(after: leftIdx)
                }

                leftIdx = arr[i].index(after: leftIdx)
                while arr[i][leftIdx] != ")" {
                    key += String(arr[i][leftIdx])
                    leftIdx = arr[i].index(after: leftIdx)
                }
                groups[key, default: []].append(p)
            }
            
        }
        return Array(groups.values).filter{$0.count > 1}
    }
}