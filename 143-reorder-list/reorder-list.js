// Stack
// Time and Space: O(n)
var reorderList = function(root) {
    let head = null, stack = []
    while (root) {
        stack.push(root)
        root = root.next
    }
    let s = 0, e = stack.length-1
    while (s <= e) {

        if (s === e) {
            if (head) head.next  = stack[s]
            stack[s].next = null
            break;
        }

        if (!head) {
            head = stack[s]
        } else {
            head.next = stack[s]
        }

        stack[s].next = stack[e]
        stack[e].next = null;
        head = stack[e]
        s+=1; e--;
    }
    return stack[0]
};

