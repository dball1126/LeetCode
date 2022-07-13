class HeapNode {
    constructor(val, key) {
        this.val = val;
        this.key = key;
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

class DisJoinSet {
    rank = []
    root = []
    connected = 0
    constructor(a) {
        this.rank = new Array(a.length).fill(1)
        this.root = new Array(a.length)
        a.forEach((v, i) => {
            this.root[i] = i;
        })
    }
    isConnected(n1, n2){
        return this.find(n1) === this.find(n2)
    }
    find(n) {
        let p = this.root[n]
        if (p === n) return n;
        this.root[n] = this.find(this.root[n])
        return this.root[n]
    }
    union(n1, n2) {
        let p1 = this.find(n1), p2 = this.find(n2)
        if (p1 === p2) return;
        let r1 = this.rank[p1], r2 = this.rank[p2]
        if (r1 > r2) {
            this.root[p2] = p1
        } else if (r1 < r2) {
            this.root[p1] = p2
        } else {
            this.rank[p1]++
            this.root[p2] = p1
        }
        this.connected += 1;
    }
}

const minCostConnectPoints = (points) => {
    if (points.length <= 1) return 0;
    let unionSet = new DisJoinSet(points);
    let minHeap = new MinHeap();
    for (let i = 0; i < points.length; i++) {
        let vx = points[i][0], vy = points[i][1]
        for (let j = i+1; j < points.length; j++) {
            if (i === j) continue;
            let vx2 = points[j][0], vy2 = points[j][1]
            let val = Math.abs(vx - vx2) + Math.abs(vy - vy2)
            minHeap.insert(new HeapNode(val, [i, j]))
        }
    }
    let cost = 0;
    while (unionSet.connected !== points.length-1) {
        let v = minHeap.poll();
        if (!unionSet.isConnected(v.key[0], v.key[1])) {
            unionSet.union(v.key[0], v.key[1])
            cost += v.val
        }
    }
    return cost;
}
