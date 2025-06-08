class Solution {
    func reverseList(_ head: ListNode?) -> ListNode? {
        var prev: ListNode?
        var curr: ListNode? = head

        while var node = curr {
            var next: ListNode? = node.next
            node.next = prev
            prev = node
            curr = next
        }
        return prev
    }
}