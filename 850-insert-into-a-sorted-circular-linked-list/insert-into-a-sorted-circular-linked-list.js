/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) {
    const nde = new _Node(insertVal, null);
    if (!head) {
        nde.next = nde;
        return nde;
    }
    let curr = head;

    while (curr.next !== head) {

        if (curr.val > curr.next.val && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            break;
        } else if (curr.val <= insertVal && insertVal <= curr.next.val) {
            break;
        }
        curr = curr.next;
    }
    let temp = curr.next;
    curr.next = nde;
    nde.next = temp;
    return head;
};