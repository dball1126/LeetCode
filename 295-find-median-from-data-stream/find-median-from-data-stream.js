var MedianFinder = function() {
    this.lo = new MinPriorityQueue();
    this.hi = new MaxPriorityQueue();
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  MedianFinder.prototype.addNum = function(n) {
    if (this.lo.isEmpty() || n > this.lo.front().element) {
        this.lo.enqueue(n);
    } else {
        this.hi.enqueue(n);
    } 

    if (this.lo.size() > (this.hi.size()+1)) {

        this.hi.enqueue(this.lo.dequeue().element)
    } else if (this.hi.size() > (this.lo.size() + 1) ) {

        this.lo.enqueue(this.hi.dequeue().element)
    }
  };
  
  /**
   * @return {number}
   */
  MedianFinder.prototype.findMedian = function() {
  
    if (this.lo.size() > this.hi.size()) {
        return this.lo.front().element
    } else if (this.hi.size() > this.lo.size()) {
        return this.hi.front().element
    } else {
        let v1 = this.lo.front().element || 0, v2 = this.hi.front().element || 0
        return (v1 + v2) / 2
    }
  };
  