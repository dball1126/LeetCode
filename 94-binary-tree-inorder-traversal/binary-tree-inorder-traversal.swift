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
    func inorderTraversal(_ root: TreeNode?) -> [Int] {
        guard var node = root else { return [] }
        var stack: [TreeNode] = [], curr: TreeNode? = root, inorder: [Int] = []

        while curr != nil || !stack.isEmpty {
            while curr?.left != nil {
                stack.append(curr!)
                curr = curr?.left
            }
            if curr == nil { curr = stack.removeLast() }
            inorder.append(curr!.val)
            curr = curr?.right
        }
        return inorder
    }
}