var closestValue = function(root, target) {
    let min = Infinity, minAvg = Infinity
    const dfs = (nde) => {
        if (!nde) return Infinity

        if (target === nde.val) {
            minAvg = 0
            min = nde.val
            return;
        } else if (target > nde.val) {
            let newAvg = target - nde.val
            if (newAvg < minAvg) {
                minAvg = newAvg
                min = nde.val
            } else if ( newAvg === minAvg && nde.val < min) {
                min = nde.val
            }
            dfs(nde.right)
        } else {
            let newAvg = nde.val - target
            if (newAvg < minAvg) {
                minAvg = newAvg
                min = nde.val
            }else if ( newAvg === minAvg && nde.val < min) {
                min = nde.val
            }
            dfs(nde.left)
        }
    }
    dfs(root)
    return min;
};