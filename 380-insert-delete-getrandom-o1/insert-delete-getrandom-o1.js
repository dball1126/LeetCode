
var RandomizedSet = function() {
    this.map = new Map();
    this.order = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        let idx = this.order.length;
        this.map.set(val, idx)
        this.order.push(val)
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        let idx = this.map.get(val)
        let len = this.order.length-1
        if (this.order.length && len !== idx) {
            let secondVal = this.order[len]
            this.map.set(secondVal, idx)
            let temp1 = this.order[len]
            let temp2 = this.order[idx]
            this.order[idx] = temp1;
            this.order[len] = temp2
        }
        this.order.pop()
        this.map.delete(val)
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.order.length;
    return this.order[Math.floor(Math.random() * len)]
};
