/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let steps = 0;
    const dfs = (nde) => {
        if (!nde) return 0;
        const left = dfs(nde.left), right = dfs(nde.right)

        steps += Math.abs(left) + Math.abs(right)
        return left + right + nde.val - 1
    }
    dfs(root)
    return steps;
};
