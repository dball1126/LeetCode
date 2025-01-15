var alienOrder = function(words) {
    
    let dict = new Map(), order = '', visited = new Set(), visiting = new Set();

    for (let w of words) {
        for (let c of w) {
            if (!dict.has(c)) dict.set(c, new Set());
        }
    }

    for (let i = 1; i < words.length; i++) {
        let w1 = words[i-1], w2 = words[i], j = 0;
        let len = Math.min(w1.length, w2.length);

        while (j < len) {
            if (w1[j] !== w2[j]) {
                dict.get(w1[j]).add(w2[j]);
                break;
            }
            j++;
        }
        if (j === len && w1.length > w2.length) return '';
    }

    const dfs = (nde) => {
        if (visited.has(nde)) return false;
        if (visiting.has(nde)) return true;
        visiting.add(nde);

        for (let n of Array.from(dict.get(nde))) {
            if (dfs(n)) return true;
        }
        visiting.delete(nde);
        visited.add(nde);
        order = nde + order;
    }
    for (let [k, v] of dict) {
        if (dfs(k)) return '';
    }
    return order;
};