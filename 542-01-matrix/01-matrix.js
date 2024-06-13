// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = undefined;
//     }
// }
// class Queue {
//     constructor() {
//         this.head = new Node();
//         this.tail = this.head;
//         this.count = 0
//     }
    
//     enqueue(value) {
//         this.tail.next = new Node(value);
//         this.tail = this.tail.next;
//         this.count++;
//     }
    
//     dequeue() {
//         const { value } = this.head.next;
//         this.head = this.head.next;
//         this.count--;
//         return value;
//     }

//     isEmpty() {
//         return this.count === 0
//       }
// }


// Breadth-First-Search
// Time and Space: O(n * m)...for rows and cols
var updateMatrix = function(mat) {
    
    let n = mat.length, m = mat[0].length
    const dirs = [[-1,0], [1,0],[0, -1],[0,1]]
    const queue = new Queue()
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    for (let r = 0; r < n; r++) { // enqueue Zeros
        for (let c = 0; c < m; c++) {
            if (mat[r][c] === 0) {
                queue.enqueue([r, c, 0])
                visited[r][c] = true
            }
        }
    }

    while (!queue.isEmpty()) {
        let [r, c, v] = queue.dequeue()
        mat[r][c] = v

        for (let [x, y] of dirs) {
            let rx = r + x, cy = c + y
            if (rx >= 0 && cy >= 0 && rx < n && cy < m && !visited[rx][cy]) {
                visited[rx][cy] = true;
                queue.enqueue([rx, cy, v + 1])
            }
        }
    }

    return mat;
};
