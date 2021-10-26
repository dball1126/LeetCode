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
var cloneGraph = function(node) {
    if (!node) return;
    let [stack, vertices, root, visited] = [[], new Map(), undefined, new Set()]
    stack.push(node)

    const getOrSetNode = (node) => {
        if (vertices.has(node.val)) {
            node = vertices.get(node.val)
        } else {
            node = new Node(node.val, node.neighbors)
            vertices.set(node.val, node)
        }
        return node
    }

    while (stack.length) {
        let node = stack.pop();
        if (!root){
            node = new Node(node.val, node.neighbors)
            root = node;
            vertices.set(node.val, node)
        } else {
            node = getOrSetNode(node)
        }

        node.neighbors = node.neighbors.map(node => getOrSetNode(node))

        if(!visited.has(node.val)) {
            visited.add(node.val)
            stack.push(...node.neighbors)
        }
    }

    return root;
};