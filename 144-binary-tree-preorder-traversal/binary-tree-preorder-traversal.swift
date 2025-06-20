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
    func preorderTraversal(_ root: TreeNode?) -> [Int] {
        var curr: TreeNode? = root
        var result: [Int] = []
        var stack: [TreeNode] = []

        while !stack.isEmpty || curr != nil {
            if curr == nil { curr = stack.popLast()! }
            result.append(curr!.val)
            if var left: TreeNode = curr?.right {
                stack.append(left)
            }
            curr = curr?.left ?? nil
        }
        return result
    }
}