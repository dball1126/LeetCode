class Solution {
    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        var visited: Set<Int> = Set<Int>(), visiting: Set<Int> = Set<Int>()
        var adjList: [Int:Set<Int>] = [:]
        for i: Int in 0..<numCourses {
            if adjList[i] == nil { adjList[i] = Set<Int>()}
        }
        for pre: [Int] in prerequisites {
            adjList[pre[0]]!.insert(pre[1])
        }

        func hasCycle(_ nde: Int) -> Bool {
            if visited.contains(nde) { return false }
            if visiting.contains(nde) { return true }
            visiting.insert(nde)
            for child: Int in adjList[nde]! {
                if hasCycle(child) { return true }
            }
            visiting.remove(nde)
            visited.insert(nde)
            return false
        }
        for i: Int in 0..<numCourses {
            if hasCycle(i) { return false }
        }
        return true
    }
}