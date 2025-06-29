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
        var curr: TreeNode? = root, stack: [TreeNode] = [] 
        var preorder: [Int] = []
        while curr != nil || !stack.isEmpty {
            if curr == nil { curr = stack.removeLast()}
            preorder.append(curr!.val)
            if var right = curr?.right { stack.append(right)}
            curr = curr?.left
        }   
        return preorder
    }
}