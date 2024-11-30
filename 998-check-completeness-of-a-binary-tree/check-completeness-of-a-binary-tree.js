// Level Order Traversal
// Time and Space: O(n)
var isCompleteTree = function(root) {
    let queue = [[root]], placed = false
    while (queue.length) {
        let lvl = queue.shift();
        let nxLvl = []
        for (let n of lvl) {
            if (n.right && !n.left) return false;
            if (placed &&( n.left || n.right)) return false;
            if (n.left && n.right) {
                nxLvl.push(n.left, n.right)
            } else if (n.left) {
                nxLvl.push(n.left)
                placed = true;
            } else if (!n.left && !n.right) {
                placed = true;
            }
        }
        if (nxLvl.length) queue.push(nxLvl)
    }
    return true;
};