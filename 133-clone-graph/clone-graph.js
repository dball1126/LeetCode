/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    const nodeMap = new Map();
    const stack = [node];
    const visited = new Set();
    let head;
    while (stack.length) {
        let curr = stack.pop();
        if (!nodeMap.has(curr)) {
            nodeMap.set(curr, new _Node(curr.val));
        }
        let copy = nodeMap.get(curr);
        visited.add(curr);
        for (let n of curr.neighbors) {
            if (!nodeMap.has(n)) nodeMap.set(n, new _Node(n.val));
            copy.neighbors.push(nodeMap.get(n));
            if (!visited.has(n)) {
                stack.push(n);
                visited.add(n);
            }
        }
        if (!head) {
            head = copy;
        }
    }
    return head;
};