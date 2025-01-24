var canFinish = function(numCourses, prerequisites) {
    
    const map = new Map(), visited = new Set(), visiting = new Set();
    for (let n = 0; n < numCourses; n++) {
        if (!map.has(n)) map.set(n, new Set());
    }
    for (let [course, preCourse] of prerequisites) {
        map.get(course).add(preCourse);
    }

    const hasCycle = (nde) => {
        if (visited.has(nde)) return false;
        if (visiting.has(nde)) return true;

        visiting.add(nde);
        for (let n of Array.from(map.get(nde))) {
            if (hasCycle(n)) return true;
        }
        visiting.delete(nde);
        visited.add(nde);
    }
    for (let n = 0; n < numCourses; n++) {
        if (hasCycle(n)) return false;
    }
    return true;
};