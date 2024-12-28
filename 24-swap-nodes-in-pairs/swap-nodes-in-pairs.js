/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    let sentinel = new ListNode()
    let prev = sentinel;

    while (head && head.next) {
        let next = head.next.next;
        let first = head;
        let second = head.next;
        prev.next = second;
        second.next = first;
        first.next = next;
        prev = first;
        head = next;
    }
    return sentinel.next;
};