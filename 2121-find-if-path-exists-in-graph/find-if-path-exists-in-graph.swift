class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        var adjList: [Int: Set<Int>] = [:], visited = Set<Int>()
        for edge: [Int] in edges {
            adjList[edge[0], default: Set<Int>()].insert(edge[1])
            adjList[edge[1], default: Set<Int>()].insert(edge[0])
        }

        func dfs(_ node: Int?) -> Bool {
            guard var nde = node else { return false }
            if node == destination { return true }
            visited.insert(nde)
            if var children = adjList[nde] {
                for child in Array(children) {
                    if !visited.contains(child) {
                        visited.insert(child)
                        if dfs(child) { return true}
                    }
                }
            }
            return false
        }
        return dfs(source)
    }
}