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
public struct Data {
    public var dir: String = ""
    public var nodes: [TreeNode] = []
    init(_ dir: String, _ nodes: [TreeNode]) {self.dir = dir; self.nodes = nodes}
}
class Solution {
    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node = root else { return []}
        var levels: [Data] = [Data("r", [node])]
        var order: [[Int]] = []

        while !levels.isEmpty {
            var data = levels.removeFirst()
            var newLevel: [TreeNode] = []
            var newVals: [Int] = []

            for n in data.nodes {
                newVals.append(n.val)
                if var left = n.left {newLevel.append(left)}
                if var right = n.right {newLevel.append(right)}
            }
            if !newLevel.isEmpty {
                levels.append(Data(data.dir == "r" ? "l" : "r", newLevel))
            }
            if data.dir == "r" {
                order.append(newVals)
            } else {
                order.append(newVals.reversed())
            }
        }
        return order
    }
}