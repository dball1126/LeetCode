/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// Time and Space: O(V + E)
var cloneGraph = function(node) {
    if (!node) return null
    let map = new Map();
    let visited = new Set();
    let root = new Node(node.val)
    map.set(root.val, root)
    let q = [[node, root]]

    while (q.length) {
        let curr = q.shift();
        let oldNode = curr[0], newNode = curr[1]

        if (visited.has(oldNode.val)) continue;
        visited.add(oldNode.val)

        oldNode.neighbors.forEach(n => {
            let newNeighbor;

            if (map.has(n.val)) {
                newNeighbor = map.get(n.val)
            } else {
                newNeighbor = new Node(n.val)
                map.set(n.val, newNeighbor)
            }

            q.push([n, newNeighbor])
            newNode.neighbors.push(newNeighbor)
        })
    }
    return root
};