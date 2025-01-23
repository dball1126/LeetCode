/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let ndeMap = new Map(), newHead = null;

    while (head) {
        let nde;
        if (!ndeMap.has(head)) {
            ndeMap.set(head, new Node(head.val))
        }
        nde = ndeMap.get(head);
        if (!newHead) {
            newHead = nde;
        }
        if (head.next && !ndeMap.has(head.next)) {
            ndeMap.set(head.next, new Node(head.next.val))

        }
        if (head.random && !ndeMap.has(head.random)) {
            ndeMap.set(head.random, new Node(head.random.val))
        }
        if (head.next) nde.next = ndeMap.get(head.next);
        if (head.random) nde.random = ndeMap.get(head.random);
        head = head.next;
    }
    return newHead;
};