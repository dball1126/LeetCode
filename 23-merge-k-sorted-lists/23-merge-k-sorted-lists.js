class MinHeapNum {
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

        if (this.array[pIdx] > this.array[idx]) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { 
        if (this.array.length <= 1) return undefined;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] !== undefined ? this.array[leftIdx] : Infinity;
        let rNodeVal = this.array[rightIdx] !== undefined ? this.array[rightIdx] : Infinity
        
        if (node < lNodeVal && node < rNodeVal) return;

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
        return this.array.length
    }
}
/**
 * new list, heap
 * Time and space O(n + m) n for lists m for nodes in list
 */
var mergeKLists = function(lists) {
    lists = lists.filter(list => list !== null)
    if (!lists.length) return null
    if (lists.length === 1) return lists[0]
    let heap = new MinHeapNum();
    let list
    for (let i = 0; i < lists.length; i++) {
        let l = lists[i]
        while(l) {
            heap.insert(l.val)
            l = l.next    
        }
    }
    let temp;
    while (!heap.isEmpty()) {
        if (!list) {
            list = new ListNode(heap.poll())
            temp = list
        } else {
            temp.next = new ListNode(heap.poll())
            temp = temp.next; 
        }
    }
    return list
};