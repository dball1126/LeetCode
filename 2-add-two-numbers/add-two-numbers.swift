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
        var result: ListNode?, n1: ListNode? = l1, n2: ListNode? = l2
        var curr: ListNode?, carry: Int = 0

        while n1 != nil || n2 != nil {
            if var newN1: ListNode = n1 {
                carry += newN1.val
                n1 = newN1.next
            }
            if var newN2: ListNode = n2 {
                carry += newN2.val
                n2 = newN2.next
            }
            var node: ListNode = ListNode(carry % 10)
            if result == nil { result = node }
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