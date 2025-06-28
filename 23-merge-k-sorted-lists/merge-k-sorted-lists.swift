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
    func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
        guard !lists.isEmpty else { return nil }
        guard (lists.count > 1) else { return lists[0]}
        var arr = lists
        var result: ListNode?

        while arr.count > 1 {
            for i in 0..<(arr.count / 2) {
                arr[i] = mergeLists(arr[i], arr.removeLast())
            }
        }
        return arr[0]
    }

    func mergeLists(_ node1: ListNode?,_ node2: ListNode?) -> ListNode? {
        guard node1 != nil else { return node2 }
        guard node2 != nil else { return node1 }
        var n1 = node1, n2 = node2
        var head: ListNode?
        var curr: ListNode?

        while n1 != nil || n2 != nil {
            var nextNode: ListNode
            if n1 == nil {
                nextNode = ListNode(n2!.val)
                n2 = n2?.next
            } else if n2 == nil {
                nextNode = ListNode(n1!.val)
                n1 = n1?.next
            } else if n1!.val <= n2!.val {
                nextNode = ListNode(n1!.val)
                n1 = n1?.next
            } else {
                nextNode = ListNode(n2!.val)
                n2 = n2?.next
            }
            if head == nil { head = nextNode }

            if curr != nil {
                curr?.next = nextNode
            }
            curr = nextNode
        }
        return head!
    }
}