class Solution {
    func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
        var merged: Bool = false, result: [[Int]] = []
        var cx: Int = newInterval[0], cy: Int = newInterval[1]
        for arr: [Int] in intervals {
            guard !merged else {
                result.append(arr)
                continue
            }
            let x: Int = arr[0], y: Int = arr[1] 
            if x >= cx && x <= cy || y >= cx && y <= cy || cx >= x && cx <= y || cy >= x && cy <= y {
                print("merged")
                cx = min(x, cx); cy = max(y, cy)
            } else if cy < x {
                result.append([cx, cy])
                result.append([x, y])
                merged = true
            } else {
                result.append([x, y])
            }
        }
        if !merged { result.append([cx, cy]) }
        return result
    }
}