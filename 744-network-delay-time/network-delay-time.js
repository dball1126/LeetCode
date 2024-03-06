class MinHeap { // Object version
    constructor() {
       this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
      }
  
    getLeftChild(idx) {
        return idx * 2;
    }
  
    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(node) {
        this.array.push(node);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let pIdx = this.getParent(idx)
        let pNode = this.array[pIdx]
        let node = this.array[idx]
        if (!pNode || !node) return;
        if (pNode.val > node.val) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete min/max
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let min = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return min;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]
        if (!node) return;

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : Infinity
        
        if (node.val < lNodeVal && node.val < rNodeVal) return;

        let swapIdx;
        if (lNodeVal < rNodeVal) {
            swapIdx = leftIdx
        }  else {
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);
        
    }

    isEmpty() {
        return this.array.length <= 1
    }

    peek() {
        return this.array[1];
    }

    size() {
        return this.array.length-1
    }
}

class Node {
    constructor(val, key) {
        this.val = val; this.key = key;
    }
}

// Dijkstra Algorithm
// Time: O(V + (E * log(v)))
// Space: O(V + E)..for nodes and edges
var networkDelayTime = function(times, n, k) {
    if (k === 1 && n === 1) return 0
    const adjList = new Map(), minHeap = new MinHeap(), visited = new Set()
    let result = Infinity

    for (let [u, v, w] of times) {
        if (!adjList.has(u)) adjList.set(u, [])
        adjList.get(u).push(new Node(w, v))
    }
    if (adjList.has(k)) minHeap.insert(new Node(0, k))

    while (!minHeap.isEmpty()) {
        let nde = minHeap.poll();
        if (visited.has(nde.key)) continue;
        visited.add(nde.key)
        if (visited.size === n) {
            return nde.val;
        }

        if (adjList.has(nde.key)) {
            for (let node of adjList.get(nde.key)) {
                minHeap.insert(new Node(node.val + nde.val, node.key))
            }
        }
    }
    return -1
};