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
// Time: O(n * log(n));
// Space: O(n);
var verticalTraversal = function(root) {
    if (!root) return [];
    let minLeft = 0, maxRight = 0;

    const getWidth = (nde, w) => {
        if (!nde) return;
        minLeft = Math.min(w, minLeft);
        maxRight = Math.max(w, maxRight);
        getWidth(nde.left, w - 1);
        getWidth(nde.right, w + 1);
    }
    getWidth(root, 0);

    const columns = [...new Array(Math.abs(minLeft) + maxRight + 1)].map(a => []);
    const queue = [[[root, 0]]];

    while (queue.length) {
        let level = queue.shift();
        let newLevel = [];
        for (let [nde, width] of level) {

            if (nde.left) newLevel.push([nde.left, width - 1]);
            if (nde.right) newLevel.push([nde.right, width + 1]);
        }
        level.sort((a,b) => a[0].val - b[0].val)
        for (let [nde, width ] of level) {
            columns[Math.abs(minLeft) + width].push(nde.val);
        }
        if (newLevel.length) queue.push(newLevel);
    }
    
    return columns;
};