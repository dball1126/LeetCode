/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, head = null, curr = null;

    while (l1 || l2) {
        let v1 = 0, v2 = 0
        if (l1) v1 = l1.val;
        if (l2) v2 = l2.val;

        let newVal = v1 + v2 + carry;
        let newCarry = Math.floor(newVal / 10);
        newVal %= 10;
        let nde = new ListNode(newVal);
        if (!head) {
            head = nde;
        } else {
            curr.next = nde;
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        curr = nde;
        carry = newCarry;
    }
    if (carry !== 0) {
        curr.next = new ListNode(carry);
    }
    return head;
};