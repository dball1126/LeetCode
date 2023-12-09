/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tortise = head, hare = head;
    let tNum = 1, hareNum = 2
    if (!head) return false;
    if (hare) hare = hare.next;
    while (tortise && hare) {
        if (tortise === hare) return true;
        tortise = tortise.next
        hare = hare.next
        if (hare) hare = hare.next;
    }
    return false;
};