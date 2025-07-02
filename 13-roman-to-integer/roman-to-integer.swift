class Solution {
    func romanToInt(_ s: String) -> Int {
        var result: Int = 0, i: String.Index = s.startIndex

        while i < s.endIndex {
            var nxIdx: String.Index = s.index(after: i)
            if nxIdx != s.endIndex {
                if s[i] == Romans.I.rawValue && s[nxIdx] == Romans.V.rawValue {
                    result += 4
                    i = s.index(after: nxIdx)
                } else if s[i] == Romans.I.rawValue && s[nxIdx] == Romans.X.rawValue {
                    result += 9
                    i = s.index(after: nxIdx)
                } else if s[i] == Romans.X.rawValue && s[nxIdx] == Romans.L.rawValue {
                    result += 40
                    i = s.index(after: nxIdx)
                } else if s[i] == Romans.X.rawValue && s[nxIdx] == Romans.C.rawValue {
                    result += 90
                    i = s.index(after: nxIdx)
                } else if s[i] == Romans.C.rawValue && s[nxIdx] == Romans.D.rawValue {
                    result += 400
                    i = s.index(after: nxIdx)
                } else if s[i] == Romans.C.rawValue && s[nxIdx] == Romans.M.rawValue {
                    result += 900
                    i = s.index(after: nxIdx)
                } else {
                    result += Vals(rawValue: s[i])?.value ?? 0
                    i = s.index(after: i)
                }
            } else {
                result += Vals(rawValue: s[i])?.value ?? 0
                i = s.index(after: i)
            }
        }
        
        return result
    }
}

enum Romans: Character {
    case I = "I"
    case V = "V"
    case X = "X"
    case L = "L"
    case C = "C"
    case D = "D"
    case M = "M"    
}
enum Vals: Character {
    case I = "I"
    case V = "V"
    case X = "X"
    case L = "L"
    case C = "C"
    case D = "D"
    case M = "M" 
    var value: Int {
        switch self {
            case .I: return 1
            case .V: return 5
            case .X: return 10
            case .L: return 50
            case .C: return 100
            case .D: return 500
            case .M: return 1000
        }
    }
}