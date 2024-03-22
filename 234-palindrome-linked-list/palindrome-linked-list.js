/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Linked List Traversal
// Two-pointer
// Time and Space: O(n)
var isPalindrome = function(head) {
    const order = []

    while (head) {
        order.push(head)
        head = head.next;
    }
    let l = 0, r = order.length-1

    while ( l <= r) {
        if (order[l].val !== order[r].val) return false;
        l++; r--;
    }
    return true;
};