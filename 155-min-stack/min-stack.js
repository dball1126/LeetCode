class Node {
    constructor(val) {
        this.val = val; this.prev = null; this.next = null;
    }
}
class DbLLinkedList {
    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.head.prev = this.tail;
        this.tail.next = this.head;
    }
    insertAtHead(nde) {
        nde.next = this.head;
        nde.prev = this.head.prev;
        this.head.prev = nde;
        nde.prev.next = nde;
    }
    removeNode(nde) {
        let next = nde.next, prev = nde.prev;
        next.prev = prev;
        prev.next = next;
    }
    insert(nde) {
        nde.next = this.tail.next;
        nde.prev = this.tail
        this.tail.next = nde;
    }
}


var MinStack = function() {
    this.map = new Map();
    this.list = new DbLLinkedList();
    this.min = null;
    this.order = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let node = new Node(val)
    if ((this.min && val < this.min.val) || !this.min) {
        this.list.insertAtHead(node)
        this.min = node;
    } else {
        this.list.insert(node)
    }
    this.order.push(node)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.order.length) return null;
    let nde = this.order.pop();
    this.list.removeNode(nde)
    if (this.order.length) {
        this.min = this.list.head.prev
    } else {
        this.min = null;
    }
    return nde.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (!this.order.length) return null;
    let nde = this.order[this.order.length-1]
    return nde.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (!this.order.length) return null;
    return this.min.val;
};
