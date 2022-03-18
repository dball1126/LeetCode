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
var reverseList = function(head) {
    if (!head) return head;
    let newHead = new ListNode(head.val)

    while (head.next) {
        let prev = {...newHead};
        newHead = new ListNode(head.next.val, prev);
        head = head.next;
    }
    return newHead;
};