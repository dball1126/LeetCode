/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
 public class DataNode {
    public var dir: String
    public var nodes: [TreeNode]
    public init() {self.dir = "r"; self.nodes = []}
    public init(_ dir: String, _ nodes: [TreeNode]) { self.dir = dir; self.nodes = nodes}
}
class Solution {
    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node = root else { return [] }
        var order: [[Int]] = []
        var levels: [DataNode] = [DataNode("r", [node])]

        while !levels.isEmpty {
            var data: DataNode = levels.removeFirst()
            var values: [Int] = []
            var newLevel: [TreeNode] = []
            for n: TreeNode in data.nodes {
                values.append(n.val)
                if var left: TreeNode = n.left { newLevel.append(left)}
                if var right: TreeNode = n.right { newLevel.append(right)}
            }
            if !newLevel.isEmpty { levels.append(DataNode(data.dir == "r" ? "l" : "r", newLevel))}
            if data.dir == "r" {
                order.append(values)
            } else {
                order.append(values.reversed())
            }
        }
        return order
    }
}