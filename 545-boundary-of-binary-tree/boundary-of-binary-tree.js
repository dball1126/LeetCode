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
var boundaryOfBinaryTree = function(root) {
    if (!root) return []
    let result = [], left = [], right = [], stack = [['', root]]

    while (stack.length) {
        let [dir, nde] = stack.pop();
        let d = dir[0]
        if (!dir || dir == 'l') { // handle collecting values
            left.push(nde.val)
        } else if (dir === 'r') {
            right.push(nde.val)
        } else {
            if (!nde.left && !nde.right) {
                d === 'l' ? left.push(nde.val) : right.push(nde.val)
            }
        }

        if (d === 'l') {
            if (!nde.left && nde.right && dir === 'l') {
                stack.push(['l', nde.right])
            } else {
                if (nde.right) stack.push(['ld', nde.right])
                if (nde.left) stack.push([dir, nde.left])
            }
        } else if (d === 'r') {
            if (!nde.right && nde.left && dir === 'r') {
                stack.push(['r', nde.left])
            } else {
                if (nde.left) stack.push(['rd', nde.left])
                if (nde.right) stack.push([dir, nde.right])
            }
        } else {
            if (nde.right) stack.push(['r',nde.right])
            if (nde.left) stack.push(['l',nde.left])
        }
    }
    for (let i = right.length-1; i >= 0; i--) left.push(right[i])

    return left;
};