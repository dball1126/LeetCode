/**,
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var result: ListNode?, curr: ListNode?, carry: Int = 0, l: ListNode? = l1, r: ListNode? = l2

        while l != nil || r != nil {
            if var lnx = l {
                carry += lnx.val
                l = lnx.next
            }
            if var rnx: ListNode = r {
                carry += rnx.val
                r = rnx.next
            }
            var node: ListNode = ListNode(carry % 10)
            if result == nil { result = node}
            if curr == nil {
                curr = node
            } else { curr!.next = node; curr = node}

            carry /= 10
        }
        if carry != 0 { curr!.next = ListNode(carry)}
        return result         
    }
}