/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(n) {
    if (!n) return []
    let queue = [[n]], result = []
    while (queue.length) {
        let curr = queue.shift();
        result.push([...curr].map(a => a.val))
        let level = []

        curr.forEach(a => {
            if (a.left)level.push(a.left)
            if (a.right)level.push(a.right)
        })
        if (level.length) queue.push(level)
    }
    return result;
}