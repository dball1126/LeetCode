/**
 * @param {number[][]} edges
 * @return {number}
 */
// Breadth-First-Search
// Time: O(V + E)...for vertices and edges   2 * O(V + E)
// Space: O(V + E)...for edges
var treeDiameter = function(edges) {
    if (!edges.length) return 0

    const adjList = new Map() // O(E) space
    let diameter = 0;
    let furthestNode = null;
    for (let [n1, n2] of edges) {
        if (!adjList.has(n1)) adjList.set(n1, [])
        if (!adjList.has(n2)) adjList.set(n2, [])
        adjList.get(n1).push(n2)
        adjList.get(n2).push(n1)
    }

    const bfs = (nde) => { // reuseable method
        let visited = new Set()  // O(V)...all vertices
        let queue = [[nde, 0]]
        while (queue.length) {
            let [nde, path] = queue.shift()

            if (diameter <= path) {
                furthestNode = nde;
                diameter = path
            }
            visited.add(nde)
            const edges = adjList.get(nde)
            edges.forEach(edge => {
                if (!visited.has(edge)) {
                    visited.add(edge)
                    queue.push([edge, path+1])
                }
            })

        }
    }   
    bfs(edges[0][0])
    bfs(furthestNode)

    return diameter
};