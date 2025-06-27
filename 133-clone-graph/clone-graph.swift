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
        guard var n = node else { return node }
        var map:[ObjectIdentifier: Node] = [:], visited: Set<ObjectIdentifier> = Set<ObjectIdentifier>()
        var stack: [Node] = [n]

        while !stack.isEmpty {
            var node: Node = stack.removeLast()
            if map[ObjectIdentifier(node)] == nil { map[ObjectIdentifier(node)] = Node(node.val)}
            var curr: Node = map[ObjectIdentifier(node)]!
            visited.insert(ObjectIdentifier(node))

            for child in node.neighbors {
                if map[ObjectIdentifier(child!)] == nil { map[ObjectIdentifier(child!)] = Node(child!.val)}
                var childNode: Node = map[ObjectIdentifier(child!)]!
                curr.neighbors.append(childNode)
                if !visited.contains(ObjectIdentifier(child!)) {
                    visited.insert(ObjectIdentifier(child!))
                    stack.append(child!)
                }
            }
        }
        return map[ObjectIdentifier(n)]
    }
}