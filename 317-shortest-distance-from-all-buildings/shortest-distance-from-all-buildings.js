/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    let rLen = grid.length, cLen = grid[0].length, buildingsCount = 0, queue = [];
    let minDistance = Infinity;
    const distance = [...new Array(rLen)].map(a => [...new Array(cLen)].fill(0));
    const buildings = [...new Array(rLen)].map(a => [...new Array(cLen)].fill(0));
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    for (let r = 0; r < rLen; r++) {
        for (let c = 0; c < cLen; c++) {
            if (grid[r][c] === 1) {
                queue.push([r,c,0,1]);
                buildingsCount++;
            }
        }
    }
    while (queue.length) {
        let newQueue =[ queue.shift()];

        let visited = new Set();
        while (newQueue.length) {
            let [r, c, d, count] = newQueue.shift();

            if (grid[r][c] === 0) {
                distance[r][c] +=d;
                buildings[r][c] += count;
            }
            if (buildings[r][c] === buildingsCount) {
                minDistance = Math.min(minDistance, distance[r][c]);
            }
            visited.add(r + ":" + c);

            for (let [x, y] of dirs) {
                let dx = r +x, dy = c + y;
                if (dx >= 0 && dy >= 0 && dx < rLen && dy < cLen 
                    && !visited.has(dx+":"+dy) && grid[dx][dy] === 0) {
                        newQueue.push([dx,dy, d+ 1, count]);
                        visited.add(dx+":"+dy);
                    }
            }
        }
    }
    return minDistance === Infinity ? -1 : minDistance;
};