/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// Binary search
// Time and Space: O(n * log(k))...k is the range of min day ...max cumulative sum
var shipWithinDays = function(weights, days) {
    let low = -Infinity, high = 0
    for (let w of weights) {
        low = Math.max(w, low);
        high += w;
    }
    let leastWeight = high

    const isPossible = (cap) => {
        let totalDayCount = 1
        let weight = 0
        for (let i = 0; i < weights.length; i++) {
            if (weight + weights[i] > cap) {
                totalDayCount++
                weight = weights[i]
            } else {
                weight += weights[i]
            }
        }
        return totalDayCount <= days
    }

    while (low <= high) {
        let cap = Math.floor((high + low) / 2)
        let sameChecked = (low === high)
        if (isPossible(cap)) {
            leastWeight = Math.min(leastWeight, cap)
            high = cap
        } else {
            low = cap + 1
        }
        if (sameChecked) break
    }
    return leastWeight
};