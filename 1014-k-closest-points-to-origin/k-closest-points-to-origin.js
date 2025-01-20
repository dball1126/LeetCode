/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 class Node {
    constructor(value,row,col) {
        this.value = value;
        this.row = row;
        this.col = col;
    }
}
var kClosest = function(points, k) {
    const maxHeap = new MaxPriorityQueue(), closestPoints = [];

    for (let [x, y] of points) {
        let dist = (x-0)**2 + (y-0)**2;
        maxHeap.enqueue(new Node(dist,x,y), dist);
        if (maxHeap.size() > k) maxHeap.dequeue();
    }

    while (!maxHeap.isEmpty()) {
        let nde = maxHeap.dequeue();
        closestPoints.push([nde.element.row, nde.element.col])
    }
    return closestPoints;
};