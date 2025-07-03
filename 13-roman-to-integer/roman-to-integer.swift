class Solution {
    func romanToInt(_ s: String) -> Int {
        var i: String.Index = s.startIndex, result: Int = 0
        
        func handleNormalCheck() -> Void {
            result += Romans(rawValue: String(s[i]))!.value
            i = s.index(after: i)
        }

        while i < s.endIndex {
            var nx: String.Index = s.index(after: i)

            if nx != s.endIndex {
                if let ele: Romans = Romans(rawValue: String(s[i...nx])) {
                    result += ele.value
                    i = s.index(after: nx)
                } else {
                    handleNormalCheck()
                }
            } else {
                handleNormalCheck()
            }
        }
        return result       
    }
}

enum Romans: String {
    case I = "I"
    case IV = "IV"
    case IX = "IX"
    case V = "V"
    case X = "X"
    case XL = "XL"
    case XC = "XC"
    case L = "L"
    case C = "C"
    case CD = "CD"
    case CM = "CM"
    case D = "D"
    case M = "M"

    var value: Int {
        switch self {
            case .I: return 1
            case .IV: return 4
            case .IX: return 9
            case .V: return 5
            case .X: return 10
            case .XL: return 40
            case .XC: return 90
            case .L: return 50
            case .C: return 100
            case .CD: return 400
            case .CM: return 900
            case .D: return 500
            case .M: return 1000
        }
    }
}