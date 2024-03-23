/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
// Binary Search
// Time:(n * log(m))...n for sweets in sweetness...m for max sum range of 1...sum
// Space: O(1)
var maximizeSweetness = function(sweetness, k) {
    k += 1
    let low = 1, high = 0
    let minimumSweetness = -Infinity
    for (let s of sweetness) {
        high += s
    }

    const isPossible = (sweet) => {
        let total = 0
        let count = 0
        for (let s of sweetness) {
            count += s
            if (count >= sweet) {
                total++
                count = 0
            }
        }
        return total >= k
    }

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)

        if (isPossible(mid)) {
            minimumSweetness = Math.max(minimumSweetness, mid)
            low = mid +1
        } else {
            high = mid -1
        }
    }
    return minimumSweetness === -Infinity ? 0 : minimumSweetness
};