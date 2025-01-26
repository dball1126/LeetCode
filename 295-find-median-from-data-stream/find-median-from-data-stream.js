class Node {
    constructor(value) {
        this.value = value;
    }
  }


  
var MedianFinder = function() {
    this.lo = new MinPriorityQueue();
    this.hi = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.lo.isEmpty() || num > this.lo.front().element.value) {
        this.lo.enqueue(new Node(num), num);
    } else {
        this.hi.enqueue(new Node(num), num);
    }

    if (this.lo.size() > this.hi.size()+1) {
        let node = this.lo.dequeue().element;
        this.hi.enqueue(node, node.value);
    } else if (this.hi.size() > this.lo.size()+1) {
        let node = this.hi.dequeue().element;
        this.lo.enqueue(node, node.value);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if (this.lo.size() > this.hi.size()) {
        return this.lo.front().element.value;
    } else if (this.hi.size() > this.lo.size()) {
        return this.hi.front().element.value;
    } else {
        let v1 = 0, v2 = 0;
        if (!this.lo.isEmpty()) v1 = this.lo.front().element.value
        if (!this.hi.isEmpty()) v2 = this.hi.front().element.value
        return (v1 + v2) / 2
    }
};
