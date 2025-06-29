/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public var random: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *    	   self.random = nil
 *     }
 * }
 */

class Solution {
    func copyRandomList(_ head: Node?) -> Node? {
        var newHead: Node?, curr: Node? = head
        var map: [ObjectIdentifier: Node] = [:]
        while curr != nil {
            if map[ObjectIdentifier(curr!)] == nil {map[ObjectIdentifier(curr!)] = Node(curr!.val)}
            var currNode: Node = map[ObjectIdentifier(curr!)]!
            if newHead == nil { newHead = currNode }

            if var next: Node = curr?.next {
                if map[ObjectIdentifier(next)] == nil {map[ObjectIdentifier(next)] = Node(next.val)}
                currNode.next = map[ObjectIdentifier(next)]
            }
            if var random: Node = curr?.random {
                if map[ObjectIdentifier(random)] == nil {map[ObjectIdentifier(random)] = Node(random.val)}
                currNode.random = map[ObjectIdentifier(random)]
            }
            curr = curr?.next
        }
        return newHead
    }
}