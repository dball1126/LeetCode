/**
 * Create Adjaceny List
 * Create a Visited array
 * Carry over the value from the previous node
 * Keep track of a max value
 * Space Complexity O(N + E) The heap is E for edges. N is n items in other objects such as adJ List and the Visited set.
 * Time Complexity O(E * log(E)) E for edges added to the heap and then log(n) for every time we extract the minimum value.
 * BFS - Dijkstra's Algorithm - carry over a weight for the positive weighted edges.
 */

class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

    }
}

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
}

 /** 
 * 
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let [adjList, priorityQ, max, visited] = [new Map(), new MinHeap(), 0, new Set()]
    priorityQ.insert(new Node(k, 0))

    // Create an adjaceny List. It can be done in different ways, but this has to be correct otherwise the algorithm won't work.
    for (let i = 0; i < times.length; i++) {
        let [key1, key2, val] = times[i];
        if (!adjList.has(key1)) adjList.set(key1, []) 
        if (!adjList.has(key2)) adjList.set(key2, [])
        adjList.get(key1).push(new Node(key2, val));
    }

    while (!priorityQ.isEmpty()) {
        const node = priorityQ.poll();
        visited.add(node.key);
        max = Math.max(max, node.val) // because it's a priority queue. It's guaranteed to be the lowest value(distance)...keep track of the max.
        
        if (n === visited.size) return max;
        
        for (let i = 0; i < adjList.get(node.key).length; i++) {
            let newNode = adjList.get(node.key)[i];
            
            if (visited.has(newNode.key)) continue; // do not process if we already processed it.
          
            priorityQ.insert(new Node(newNode.key, node.val + newNode.val)) // make sure to add the distance from the previous node
        }
    }

    // Dijkstra's algorithm finds the shortest path to all nodes. We already check to make sure the visited
    // set equals n nodes. If for whatever reason the max is not returned....it's guaranteed all nodes Haven't been visited...return -1.
    return -1;
};