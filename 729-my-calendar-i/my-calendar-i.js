
var MyCalendar = function() {
    this.books = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    
    for (let [s, e] of this.books) {

        // does start or end fall inside of s or e
        if ((start >= s && start < e) || (end > s && end <= e) ) return false

        if ((s >= start && s < end) || (e > start && e <= end)) return false

    }

    this.books.push([start,end])
    return true;
};



/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */