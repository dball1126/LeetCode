var rangeSumBST = function(root, low, high) {
    const dfs = (nde) => {
        if (!nde) return 0;
        let result = (nde.val >= low && nde.val <= high )? nde.val : 0;
        if (high > nde.val ) {
            result += dfs(nde.right)
        }
        if (low < nde.val) {
            result += dfs(nde.left)
        }
        return result
    }
    return dfs(root, -Infinity, Infinity)
};