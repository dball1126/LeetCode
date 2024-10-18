/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(arr) {
    let map = new Map(), min = Infinity, max = -Infinity, n = arr.length
    
    for (let i = 0; i < n; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
        if (!map.has( arr[i])) map.set(arr[i], [])
        map.get(arr[i]).push(i)
    }
    let minIdx = Infinity, maxIdx = -Infinity

    for (let i of Array.from(map.get(min))) {
        minIdx = Math.min(minIdx, i)
    }

    for (let i of Array.from(map.get(max))) {
        maxIdx = Math.max(maxIdx, i)
    }

    if (minIdx > maxIdx) {
        return minIdx - 0 + n-1 -maxIdx - 1
    } else {
        return minIdx - 0 + n-1 - maxIdx
    }

};