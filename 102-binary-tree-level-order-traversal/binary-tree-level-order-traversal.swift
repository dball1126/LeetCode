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
class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node: TreeNode = root else { return [] }
        var result: [[Int]] = []
        var levels: [[TreeNode]] = [[node]]
        
        while !levels.isEmpty {
            var level: [TreeNode] = levels.removeFirst()
            var newLevel: [TreeNode] = []
            var newVals: [Int] = []
            for n: TreeNode in level {
                newVals.append(n.val)
                if var left: TreeNode = n.left {newLevel.append(left)}
                if var right: TreeNode = n.right {newLevel.append(right)}
            }
            if !newLevel.isEmpty {levels.append(newLevel)}
            result.append(newVals)
        }
        return result;
    }
}