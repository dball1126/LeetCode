class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        var adjList: [Int: Set<Int>] = [:]

        for edge in edges {
            if adjList[edge[0]] == nil { adjList[edge[0]] = Set<Int>()}
            if adjList[edge[1]] == nil { adjList[edge[1]] = Set<Int>()}
            adjList[edge[0]]!.insert(edge[1])
            adjList[edge[1]]!.insert(edge[0])
        }
        var stack: [Int] = [source], visited: Set<Int> = Set<Int>()
        while !stack.isEmpty {
            var node: Int = stack.removeFirst()
            if node == destination { return true }
            visited.insert(node)
            if var nodes: Set<Int> = adjList[node] {
                if nodes.contains(destination) { return true }
                for n in nodes {
                    if !visited.contains(n) {
                        stack.append(n)
                        visited.insert(n)
                    }
                }
            }
        }
        return false
    }
}