/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    const graph = new Map()
    let targetNode = null;

    const buildGraph = (nde, prev) => {
        if (!nde) return;
        if (!graph.has(nde)) graph.set(nde, new Set());
        if (prev) {
            if (!graph.has(prev)) graph.set(prev, new Set());
            graph.get(nde).add(prev)
            graph.get(prev).add(nde)
        }
        if (nde.val === target.val) targetNode = nde;
        buildGraph(nde.left, nde)
        buildGraph(nde.right, nde)
    }
    buildGraph(root, null);

    let result = [], queue = [[targetNode, 0]], visited = new Set();

    while (queue.length) {
        let [nde, dist] = queue.shift();
        visited.add(nde);
        if (dist === k) {
            result.push(nde.val);
            continue;
        }
        for (let n of Array.from(graph.get(nde))) {
            if (!visited.has(n)) {
                visited.add(n);
                queue.push([n, dist + 1]);
            }
        }
    }
    return result;
};