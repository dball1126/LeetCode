class Solution {
    func fib(_ n: Int) -> Int {
        if n == 0 { return 0 }
        if n == 1 { return 1 }
        var arr: [Int] = Array(repeating: 0, count: n+1)
        arr[0] = 0
        arr[1] = 1

        for i in 2...n {
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr[n]
    }
}