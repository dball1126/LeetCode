/**
 * Time O(n) for nodes in longest linked list(a or b)
 * Space: O(n + 1)  = O(n)(longest list...a or b) ...1 extra bit for adding two numbers
 */
 var addTwoNumbers = function(a, b) {
    let v1, v2, sum, root, curr, carry = 0
    while (a || b) {
        v1 = a ? a.val : 0
        v2 = b ? b.val : 0
        sum = v1 + v2 + carry
        let newCarry = sum % 10
        if (sum < 10) newCarry =  sum
        let node = new ListNode(newCarry)
        if (!root) {
            root = node
            curr = node
        } else {
            curr.next = node
            curr = node
        }
        if (a) a = a.next
        if (b) b = b.next
        carry = Math.floor(sum / 10)
        if (!a && !b && carry !== 0) curr.next = new ListNode(carry)
    }
    return root
};
