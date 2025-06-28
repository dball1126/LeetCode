class Solution {
    func reverse(_ x: Int) -> Int {
        let s: String = String(x)
        let maxVal: Int = Int(pow(2.0, 31.0))
        var sign: String = "+"
        var result: String = ""
        
        for (i, v) in s.enumerated() {
            if (i == 0 && !v.isNumber) {
                sign = String(v)
            } else {
                result = (String(v) + result)
            }
        }
        let resultNum : Int = Int(result)!

        if resultNum > maxVal { return 0 }
        return sign == "+" ? resultNum : (-resultNum)
    }
}