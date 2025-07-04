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
    func cloneGraph(_ root: Node?) -> Node? {
        guard var n = root else { return root }
        var map: [Int: Node] = [:], visited: Set<Int> = Set<Int>(), stack: [Node] = [n]
        while !stack.isEmpty {
            var node: Node = stack.removeLast()
            if map[node.val] == nil { map[node.val] = Node(node.val)}
            var oNode: Node = map[node.val]!
            visited.insert(oNode.val)
            for child in node.neighbors {
                if map[child!.val] == nil { map[child!.val] = Node(child!.val) }
                var oChild: Node = map[child!.val]!
                if !visited.contains(oChild.val) {
                    stack.append(child!)
                    visited.insert(oChild.val)
                }
                oNode.neighbors.append(oChild)
            }
        }
        return map[n.val]
    }
}