

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];

    while (lists.length > 1) {
        for (let i = 0; i < (Math.floor(lists.length/ 2)); i++) {
            lists[i] = mergeLists(lists[i], lists.pop());
        }
    }
    return lists[0]
};

const mergeLists = (list1, list2) => {
    let head = null, curr = null;

    while (list1 || list2) {
        let val1 = Infinity, val2  = Infinity
        if (list1) val1 = list1.val;
        if (list2) val2 = list2.val;
        if (val1 <= val2) {
            if (!head) {
                head = list1;
                curr = head;
            } else {
                curr.next = list1;
                curr = list1
            }
            list1 = list1.next;
        } else {
            if (!head) {
                head = list2;
                curr = head;
            } else {
                curr.next = list2;
                curr = list2;
            }
            list2 = list2.next;
        }
    }
    return head;
}