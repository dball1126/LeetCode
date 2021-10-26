/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
/**
 * Depth First Search. Use a Stack.
 * Use a vertices Set of nodes. If in set...get it from set.
 * Time Complexity: O(v + e) v is the number of nodes and e is the number of neighbors.
 * Space Complexity: O(v) we use a set and map that may have every vertice in it.
 */
var cloneGraph = function(node) {
    if (!node) return;
    let [stack, vertices, root, visited] = [[], new Map(), undefined, new Set()]
    stack.push(node)

    while (stack.length) {
        let node = stack.pop();
        if (visited.has(node.val)) continue;
        visited.add(node.val)

        if (!root){
            node = new Node(node.val, node.neighbors)
            root = node;
            vertices.set(node.val, node)
        } else {
            node = getOrSetNode(node, vertices)
        }

        node.neighbors = node.neighbors.map(node => getOrSetNode(node, vertices))
        stack.push(...node.neighbors)
    }
    return root;
};

const getOrSetNode = (node, vertices) => {
    if (vertices.has(node.val)) {
        node = vertices.get(node.val)
    } else {
        node = new Node(node.val, node.neighbors)
        vertices.set(node.val, node)
    }
    return node
}
