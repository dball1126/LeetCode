

class Edge {
    constructor(height, x) {
        this.height = height; this.x = x;
    }
  }

var getSkyline = function(buildings) {
    
    const skyline = [], heights = new MaxPriorityQueue(), edges = [];
    for (let i = 0; i < buildings.length; i++) {
        let [x, y, h] = buildings[i];
        edges.push([x, i], [y, i]);
    }
    edges.sort((a,b) => a[0] - b[0])

    let idx = 0;

    while (idx < edges.length) {
        let [currX, i] = edges[idx];

        while (edges[idx] && edges[idx][0] === currX) {
            let b = edges[idx][1];
            let h = buildings[b][2];
            let rightEdge = buildings[b][1];
            heights.enqueue(new Edge(h, rightEdge), h);
            idx++;
        }

        while (!heights.isEmpty() && heights.front().element.x <= currX) {
            heights.dequeue();
        }
        
        let currHeight = heights.isEmpty() ? 0 : heights.front().element.height;

        if (!skyline.length || skyline[skyline.length-1][1] !== currHeight) {
            skyline.push([currX, currHeight]);
        }
    }
    return skyline;
};