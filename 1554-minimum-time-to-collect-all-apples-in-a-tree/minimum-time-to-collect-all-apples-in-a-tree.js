/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
// Depth-First-Search
// Time and Space: O(v + e)...v for nodes in set, e for adjList
var minTime = function(n, edges, hasApple) {
    let visited = new Set(), adjList = new Map();
    for (let [x, y] of edges) {
        if (!adjList.has(x)) adjList.set(x, []);
        if (!adjList.has(y)) adjList.set(y, []);
        adjList.get(x).push(y);
        adjList.get(y).push(x);
    }
    const dfs = (nde) => {
        visited.add(nde);
        let path = 0;
        if (adjList.has(nde)) {
            for (let n of adjList.get(nde)) {
                if (!visited.has(n)) {
                    visited.add(n);
                    path += dfs(n);
                }
            }
        }
        if (nde === 0) {
            return path;
        } else {
            if (path !== 0 || hasApple[nde]) {
                return path + 2;
            } else {
                return 0;
            }
        }
    }
    return dfs(0);
};