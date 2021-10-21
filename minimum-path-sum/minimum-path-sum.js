/**
 * Dijkstra algorithm, minHeap.
 * Time O((n * m) * log(n * m))
 * Space O(n * m)
 * Visited array, carry over the min value; 
 */

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class PriorityQueueMin { // Object version
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
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const visited = grid.map(a => a.map(() => false))
    const dir = [[1,0],[0,1]];
    let [len, eLen, pQueue, node] = [grid.length, grid[0].length, new PriorityQueueMin(), new Node([0,0], grid[0][0])];

    pQueue.insert(node)

    while (!pQueue.isEmpty()) {
        node = pQueue.poll();
        let [r, c] = node.key;
        visited[r][c] = true;

        if (r === len-1 && c === eLen-1) {
            return node.val;
        }

        for (let i = 0; i < dir.length; i++) {
            const d = dir[i];
            let [newR, newC] = [r + d[0], c + d[1]]

            if (newR < 0 || newC < 0 || newR >= len || newC >= eLen || visited[newR][newC]) {
                continue;
            }

            pQueue.insert(new Node([newR, newC], node.val + grid[newR][newC]))
        }
    }
};