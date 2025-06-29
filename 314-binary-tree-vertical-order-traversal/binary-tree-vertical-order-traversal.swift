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
    func verticalOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node: TreeNode = root else { return []}
        var minLeft: Int = 0, maxRight: Int = 0

        func dfs(_ node: TreeNode?, _ col: Int) -> Int {
            guard var n = node else { return 0}
            minLeft = min(minLeft, col) 
            maxRight = max(maxRight, col)
            dfs(n.left, col - 1)
            dfs(n.right, col + 1)
            return col
        }
        dfs(node, 0)
        var offSet: Int = abs(minLeft) 
        var width: Int = offSet + maxRight + 1
        var cols: [[Int]] = Array(repeating: [], count: width) 
        var levels: [[(TreeNode, Int)]] = [[(node, 0)]]

        while !levels.isEmpty {
            var level: [(TreeNode, Int)] = levels.removeFirst()
            var newLevel: [(TreeNode, Int)] = []

            for (nde, c) in level {
                cols[c + offSet].append(nde.val)
                if var left: TreeNode = nde.left { newLevel.append((left, c - 1))}
                if var right: TreeNode = nde.right { newLevel.append((right, c + 1))}
            }
            if !newLevel.isEmpty { levels.append(newLevel)}
        }
        return cols
    }
}