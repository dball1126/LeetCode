class HeapNode {
    constructor(val, key) {
        this.val = val;
        this.key = key
    }
}
class MaxHeapO { // Object version
    constructor() {
       this.array = [undefined];
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
        if (pNode === undefined || node === undefined) return;
        if (pNode.val < node.val) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete min/max
        if (this.array.length <= 1) return undefined;
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

        let lNodeVal = this.array[leftIdx] !== undefined ? this.array[leftIdx].val : -Infinity;
        let rNodeVal = this.array[rightIdx] !== undefined ? this.array[rightIdx].val : -Infinity
        
        if (node.val > lNodeVal && node.val > rNodeVal) return;

        let swapIdx;
        if (lNodeVal > rNodeVal) {
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
 * Create key count of s
 * insert into max heap the set
 * return result
 * Space: O(n + n) = O(n)
 * Time: O(n + log(n) + O(1)) = O(n)
 */
var frequencySort = function(s) {
    const maxHeap = new MaxHeapO();
    let result = "";
    let freq = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!freq.has(s[i])) freq.set(s[i], 0)
        freq.set(s[i], freq.get(s[i]) + 1)
    }
    for(let [k, v] of freq.entries()) {
        maxHeap.insert(new HeapNode(v, k))
    }
    while (!maxHeap.isEmpty()) {
        let n = maxHeap.poll();
        result += n.key.repeat(n.val)
    }
    return result
};