class Solution {
    func reverse(_ x: Int) -> Int {
        guard x != 0 else { return 0 }
        let x = String(x)
        var sign: String = "+"
        var resultStr: String = ""
        let maxVal = Int(pow(2.0, 31.0))

        for i in x.indices.reversed() {
            if i == x.startIndex && !x[i].isNumber {
                sign = String(x[i])
            } else {
                let v = String(x[i])
                if resultStr.isEmpty && v == "0" { continue }  
                resultStr += v
            }
        }
        var result = Int(resultStr)!
        if result >= maxVal {
            return 0
        }
        return sign == "-" ? -result : result
    }
}