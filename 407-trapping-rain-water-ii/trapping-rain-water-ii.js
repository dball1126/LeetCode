class Node {
    constructor(val, row, col) {
        this.val = val;
        this.row = row;
        this.col = col;
    }
}
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
// Min Heap / Priority Queue
// Time: O((n * m) * log((n * m)))...n being the number of rows and m being the number of cols
// Space: O(n * m)
var trapRainWater = function(heightMap) {
    const minHeap = new MinPriorityQueue((node) => node.val);
    let n = heightMap.length, m = heightMap[0].length, trappedWater = 0;
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))

    for (let i = 0; i < n; i++) {
        minHeap.enqueue(new Node(heightMap[i][0], i, 0), heightMap[i][0]);
        visited[i][0] = true
        minHeap.enqueue(new Node(heightMap[i][m-1], i, m-1), heightMap[i][m-1]);
        visited[i][m-1] = true
    }
    for (let i = 0; i < m; i++) {
        minHeap.enqueue(new Node(heightMap[0][i], 0, i), heightMap[0][i]);
        visited[0][i] = true;
        minHeap.enqueue(new Node(heightMap[n-1][i], n-1, i), heightMap[n-1][i]);
        visited[n-1][i] = true;
    }
    while (!minHeap.isEmpty()) {
        let node = minHeap.dequeue();
        let r = node.row, c = node.col
        for (let [x, y] of dirs) {
            let rx = r + x , cy = c + y;

            if (rx >= 0 && cy >= 0 && rx < n && cy < m && !visited[rx][cy]) {
                if (heightMap[rx][cy] < node.val) {
                    trappedWater += (node.val - heightMap[rx][cy])
                    heightMap[rx][cy] = node.val
                }
                visited[rx][cy] = true;
                minHeap.enqueue(new Node(heightMap[rx][cy], rx, cy), heightMap[rx][cy]);
            }
        }
    }
    return trappedWater;
};