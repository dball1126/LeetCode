/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// Stack
// Time and Space: O(n)...for times in the logs array
// worst case we visit each element 3 times
var exclusiveTime = function(n, logs) {
    let times = new Array(n).fill(0)
    let stack = []
    let top = () => stack[stack.length-1]
    logs = logs.map(log => { // pre-processing  // O(n)
        let arr = log.split(":")
        arr[0] = parseInt(arr[0]);
        arr[2] = parseInt(arr[2])
        return arr
    })

    for (let [id, opt, time] of logs) { // O(n)
        if (opt === 'start') { 
            if (top()) {
                let [id2, opt2, time2] = top()
                times[id2] += time - time2
                top()[2] = time
            }
            stack.push([id, opt, time])
        } else {
            let [id2, opt2, time2] = stack.pop()
            times[id2] += time - time2 + 1
            if (top()) {
                top()[2] = time + 1;
            }
        }
    }  
    return times;
};