/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let curr = node;

    while (curr && curr.next && curr.next.next) {
        curr.val = curr.next.val;
        curr = curr.next;
    }
    curr.val = curr.next.val;
    curr.next = null;
};  