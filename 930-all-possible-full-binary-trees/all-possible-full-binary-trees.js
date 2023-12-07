/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// Recursive Depth-First-Search
// Time: O((2^n) * n)
// Space: O(n)
var allPossibleFBT = function(num) {
    const memo = new Map()

    const interLeave = (n) => {
        if (n <= 0) return []
        if (n === 1) return [new TreeNode(0)]
        if ((n / 2) === 0) return []
        if (memo.has(n)) return [...memo.get(n)]
        const trees = []

        for (let i = 2; i <= n; i+=2) {
            let left = interLeave(i - 1), right = interLeave(n - (i))

            for (let l of left) {
                for (let r of right) {
                    trees.push(new TreeNode(0, l, r))
                }
            }
        }
        memo.set(n, trees)
        return trees;
    }
  return interLeave(num)
};