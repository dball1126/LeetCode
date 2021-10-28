/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/**
 * Use BFS. Level order traversal. Use a Queue.
 * Time Complexity: O(V) We have to iterate over every vertice.
 * Space Complexity: O(V) We will only need to store a level of nodes in the queue. O(V)/2 = O(V)
 */

var connect = function(root) {
    if (!root) return root;
    let [queue, children] = [[root], []]

    while (queue.length) {
        let node = queue.shift();
        console.log(node)
        if (!queue.length) {
            node.next = null;
        } else {
            node.next = queue[0]
        }

        // collect children
        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        // end of tree level
        if (!queue.length) {
            queue.push(...children)
            children = []
        }
    }

    return root;
};