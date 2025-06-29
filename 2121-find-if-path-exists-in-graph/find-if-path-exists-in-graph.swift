class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        var adjList: [Int:Set<Int>] = [:], visited = Set<Int>()

        for edge in edges {
            if adjList[edge[0]] == nil { adjList[edge[0]] = Set<Int>()}
            if adjList[edge[1]] == nil { adjList[edge[1]] = Set<Int>()}
            adjList[edge[0]]!.insert(edge[1])
            adjList[edge[1]]!.insert(edge[0])
        }
        var bfs: [Int] = [source]

        while !bfs.isEmpty {
            var node: Int = bfs.removeFirst()
            if node == destination { return true }
            visited.insert(node)

            if var childSet = adjList[node] {
                if childSet.contains(destination) { return true }
                for child: Int in childSet {
                    if !visited.contains(child) {
                        visited.insert(child)
                        bfs.append(child)
                    }
                }
            }
        }
        return false
    }
}