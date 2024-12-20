// Merge Lists
// Time: O(n * log(k))...n is the number of elements, and k is the number of lists
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    while (lists.length > 1) {
        let list1 = lists.pop();
        let list2 = lists.pop();
        let newList = mergeList(list1, list2);
        lists.push(newList);
    }
    return lists[0]
};

const mergeList = (list1, list2) => {
    let newList = null, curr = null;

    while (list1 || list2) {
        let v1 = list1 ? list1.val : Infinity;
        let v2 = list2 ? list2.val : Infinity;
        let val;
        if (v1 <= v2) {
            val = v1;
            list1 = list1.next;
        } else {
            val = v2;
            list2 = list2.next;
        }
        let node = new ListNode(val);
        if (!newList) {
            newList = node;
            curr = node;
        } else {
            curr.next = node;
            curr = node;
        }
    }

    return newList;
}