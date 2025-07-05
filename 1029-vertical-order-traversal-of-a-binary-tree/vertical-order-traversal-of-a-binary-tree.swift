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
class Data {
    var col: Int
    var node: TreeNode
    init(_ col: Int, _ node: TreeNode) { self.col = col; self.node = node }
}
class Solution {
    func verticalTraversal(_ root: TreeNode?) -> [[Int]] {
        guard var r = root else { return [] }
        var minLeft: Int = 0, maxRight: Int = 0

        func dfs(_ node: TreeNode?, _ col: Int) -> Int {
            guard var n = node else { return 0 }
            minLeft = min(minLeft, col)
            maxRight = max(maxRight, col)
            dfs(n.left, col - 1)
            dfs(n.right, col + 1)
            return col
        }
        dfs(root, 0)
        var offSet: Int = abs(minLeft)

        var width: Int = offSet + maxRight + 1
        var cols: [[Int]] = Array(repeating: [], count: width)
        var queue: [[Data]] = [[Data(0, r)]]

        while !queue.isEmpty {
            var level: [Data] = queue.removeFirst()
            var newNodes: [Data] = []
            var lvl: Int = 0
            for n: Data in level {
                cols[n.col+offSet].append(n.node.val)
                lvl = n.col+offSet
                if var left: TreeNode = n.node.left { newNodes.append(Data(n.col - 1, left))}
                if var right: TreeNode = n.node.right { newNodes.append(Data(n.col + 1, right))}
            }
            if !newNodes.isEmpty{queue.append(newNodes.sorted{$0.node.val < $1.node.val})}
           
        }
        return cols
    }
}
