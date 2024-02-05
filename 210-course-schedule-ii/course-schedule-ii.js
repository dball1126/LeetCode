/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Topological Sort
// Time and SpacE: O(V + E)
const findOrder = (numCourses , pre) => {
    let indegrees = new Array(numCourses ).fill(0), map = new Map(), result = []
    const queue = new Queue();
    for(let [k, v] of pre) {
        if (!map.has(v)) map.set(v, []);
        indegrees[k]++;
        map.get(v).push(k);
    }
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) queue.enqueue(i)
    }

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        result.push(node);
        if (map.has(node)) {
            map.get(node).forEach(nde => {
                indegrees[nde]--
                if ( indegrees[nde] === 0) {
                    queue.enqueue(nde)
                }
            })
        }
    }
   return result.length === numCourses  ? result : []
}