const isValidBST = (node) => {
    if (!node) return true;

    const dfs = (n, min, max) => {
        if (!n) return true;
        if (min !== undefined && n.val <= min) return false;
        if (max !== undefined && n.val >= max) return false

        return dfs(n.left, min, n.val) === true && dfs(n.right, n.val, max)
       
    }
    return dfs(node, undefined, undefined)
}