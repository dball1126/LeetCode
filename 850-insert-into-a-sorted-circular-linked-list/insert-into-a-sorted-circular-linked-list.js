var insert = function(head, insertVal) {    
    let curr = head;
    let nde = new Node(insertVal)
    
    if (!head){
        nde.next = nde;
        return nde;
    }

    while (curr.next !== head) {

        if (curr.next.val < curr.val && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            break;
        } else if (insertVal >= curr.val   && insertVal <= curr.next.val) {
            break;
        }
        curr = curr.next;
    }

    let temp = curr.next;
    curr.next = nde;
    nde.next = temp;
    return head;
};