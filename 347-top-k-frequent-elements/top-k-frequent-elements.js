class Node {
    constructor(val, key) {
        this.val = val; this.key = key;
    }
}

var topKFrequent = function(nums, freq) {
    const minHeap = new MinPriorityQueue({priority: (nde) => nde.val})
    const map = new Map()

    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)
    }

    for (let [k, v] of map) {
        if (minHeap.size() < freq) {
            minHeap.enqueue({val: v, key: k});
        } else if (minHeap.front().element.val < v) {
            minHeap.dequeue()
            minHeap.enqueue({val: v, key: k});
        }
    }
    const result = []
    while (!minHeap.isEmpty()) {
        result.push(minHeap.dequeue().element.key)
    }
    return result
};