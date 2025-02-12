// Greedy
// Time: O(n)
// Space: O(1)
var canCompleteCircuit = function(gas, cost) {
    let total = 0, curr = gas[0] - cost[0], idx = 0

    for (let i = 1; i < gas.length; i++) {
        if (curr < 0) {
            total += curr
            curr = 0
            idx = i;
        }
        curr += (gas[i] - cost[i]);
    }
    if ((total + curr)  >= 0) return idx
    return -1
};