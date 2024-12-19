var sumNumbers = function(root) {
    if (!root) return 0
    let totalSum = 0, stack = [[root, ""]]

    while (stack.length) {
        let [nde, sum] = stack.pop();
        if (!nde.left && !nde.right) {
            totalSum += parseInt(sum + nde.val)
            continue;
        }
        if (nde.left) stack.push([nde.left, sum + nde.val])
        if (nde.right) stack.push([nde.right, sum + nde.val])
    }
    return totalSum
};