/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return null;
    let curr = root, stack = [], head = null, prev = null;;
    while (stack.length || curr) {
        while(curr && curr.left) {
            stack.push(curr);
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        if (!head) {
            head = curr;
            prev = curr;
        } else {
            prev.right = curr;
            curr.left = prev;
            prev = curr;
        }
        curr = curr.right;
    }
    if (!prev) {
        prev = head;
    }
    head.left = prev;
    prev.right = head;
    return head;
};