/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */

class Codec {
    let delimiter: String = ","
    let leaf: String = "#"
    // Encodes a tree to a single string.
    func serialize(_ root: TreeNode?) -> String {
        guard let root = root else { return leaf }
        return String(root.val) + delimiter + serialize(root.left) + delimiter + serialize(root.right)
    }
    
    // Decodes your encoded data to tree.
    func deserialize(_ data: String) -> TreeNode? {
        var queue: [String] = data.components(separatedBy: delimiter)
        return deserializeHelper(&queue, Int.min, Int.max)
    }

    func deserializeHelper(_ queue: inout [String], _ low: Int, _ high: Int) -> TreeNode? {
        let value = queue.removeFirst()
        guard value != leaf else { return nil }
        guard let nodeVal = Int(value) else { return nil }
        if nodeVal < low || nodeVal > high { return nil }
        let node = TreeNode(nodeVal)
        node.left = deserializeHelper(&queue, low, nodeVal)
        node.right = deserializeHelper(&queue, nodeVal, high)
        return node
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let ser = Codec()
 * let deser = Codec()
 * let tree: String = ser.serialize(root)
 * let ans = deser.deserialize(tree)
 * return ans
*/