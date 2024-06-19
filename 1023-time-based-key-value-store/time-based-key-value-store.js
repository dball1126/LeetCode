
var TimeMap = function() {
    this.timeMap = new Map()
    this.uniId = "T:" + Math.random() * 1000
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.timeMap.has(key)) {
        this.timeMap.set(key, new Map())
        this.timeMap.set(key + "stack", [])
    }
    this.timeMap.get(key).set(timestamp, value)
    this.timeMap.get(key + "stack").push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.timeMap.has(key)) return "";
    if (!this.timeMap.get(key).has(timestamp)) {
        let stack = this.timeMap.get(key + "stack")
        for (let i = stack.length-1; i >= 0; i--) {
            let [t, v] = stack[i]
            if (t <= timestamp) return v
        }
        return ""
    } else {
        return this.timeMap.get(key).get(timestamp)
    }
};