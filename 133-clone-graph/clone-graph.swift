/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var neighbors: [Node?]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.neighbors = []
 *     }
 * }
 */

class Solution {
    func cloneGraph(_ node: Node?) -> Node? {
        var map: [Int: Node] = [:]
        var visited = Set<Int>() 
        
        func dfs(_ nde: Node?) -> Node? {
            guard var n: Node = nde else { return nde }
            visited.insert(n.val)
            if map[n.val] == nil { map[n.val] = Node(n.val)}
            var newNode: Node = map[n.val]!

            for child: Node? in n.neighbors {
                if map[child!.val] == nil { map[child!.val] = Node(child!.val)}
                var childNode: Node = map[child!.val]!
                newNode.neighbors.append(childNode)
                if !visited.contains(child!.val) {
                    visited.insert(child!.val)
                    dfs(child)
                }
            }
            return newNode
        }
        return dfs(node)
    }
}