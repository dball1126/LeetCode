class Solution {
    func reverse(_ x: Int) -> Int {
        if x == 0 { return 0 }
        let max = Int(pow(2.0, 31.0))
        var result: Int = 0, sign: String = "+", x = String(x)
        var xStr: String = ""
        for i in x.indices.reversed() {
            if String(x[i]) == "0" && xStr.isEmpty { continue }
            if i == x.startIndex && !x[i].isNumber {
                sign = String(x[i])
            } else {
                xStr += String(x[i])
            }
        }
        result = Int(xStr)!
        return result >= max ? 0 : sign == "+" ? result : -result
    }
}