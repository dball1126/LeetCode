/**
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
        var l = l1, r = l2, carry = 0
        var result: ListNode?, curr: ListNode?

        while l != nil || r != nil {
            if var lnext = l {
                carry += l!.val
                l = lnext.next
            }
            if var rnext = r {
                carry += r!.val
                r = rnext.next
            }
            var node = ListNode(carry % 10)
            if result == nil { result = node}
            curr?.next = node
            curr = node
            carry /= 10
        }
        if carry > 0 {
            curr?.next = ListNode(carry)
        }
        return result
    }
}