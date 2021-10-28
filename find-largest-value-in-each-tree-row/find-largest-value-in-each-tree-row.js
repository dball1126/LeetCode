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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    let [result, max, queue, children] = [[], undefined, [root], []]

    while (queue.length) {
        let node = queue.shift();
        if (max === undefined) max = node.val;

        if (!queue.length) {
            result.push(Math.max(max, node.val))
            max = undefined
        } else {
            max = Math.max(max, node.val);
        }

        // collect the children;
        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        // check for end of level
        if (!queue.length) {
            queue.push(...children)
            children = [];
        }
    }
    return result;
};