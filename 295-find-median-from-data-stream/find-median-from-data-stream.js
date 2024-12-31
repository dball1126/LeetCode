
// this.one = new MaxPriorityQueue();
// this.two = new MinPriorityQueue();


var MedianFinder = function() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minHeap.isEmpty() || num > this.minHeap.front().element) {
        this.minHeap.enqueue(num)
    }else {
        this.maxHeap.enqueue(num)
    }

    if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element)
    } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeap.size() === this.maxHeap.size()) {
        return (this.minHeap.front().element + this.maxHeap.front().element) / 2
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front().element
    } else {
        return this.maxHeap.front().element
    }
};