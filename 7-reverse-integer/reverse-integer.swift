class Solution {
    func reverse(_ x: Int) -> Int {
        guard x != 0 else { return 0 }
        var xStr: String = ""
        let maxVal: Int = Int(pow(2.0, 31.0))
        let x: String = String(x)

        var sign: String = "+"
        var chars: [Character] = Array(x)
     
        var i: Int = chars.count-1
        while i >= 0 && chars[i] == "0" { i -= 1 }
        while i >= 0 {
            if i == 0 && !chars[i].isNumber {
                sign = String(chars[i])
            } else {
                xStr += String(chars[i])
            }
            i -= 1
        }
        var result: Int = Int(xStr)!
        if sign == "-" { result *= -1}

        if result < -maxVal || result >= maxVal {
            return 0
        }
        return result
    }
}