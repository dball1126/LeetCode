var sumNumbers = function(root) {
    let totalSum = 0
    const dfs = (nde, sum) => {
        if (!nde) return totalSum += parseInt(sum)
        if (!nde.left && !nde.right) return totalSum += parseInt(sum + nde.val)
        if (nde.left) dfs(nde.left, sum + nde.val)
        if (nde.right) dfs(nde.right, sum + nde.val)
    }
    dfs(root, "")
    return totalSum
};