class Node {
    constructor(value, idx) {
        this.value = value;
        this.idx = idx;
    }
}
var candy = function(ratings) {
    const minQ = new MinPriorityQueue((nde) => nde.value), len = ratings.length;
    let allCandies = 0;
    const candies = [...new Array(len)].fill(1);
    ratings.forEach((v, i) => {
        minQ.enqueue(new Node(v, i), v);
    });

    while (!minQ.isEmpty()) {
        const nde = minQ.dequeue();
        const prev = nde.idx -1 >= 0 ? ratings[nde.idx - 1] : Infinity;
        const nxt = nde.idx+1 < len ? ratings[nde.idx + 1] : Infinity;

        if (prev < nde.value || nxt < nde.value) {
            let v = 1, tgtIdx;
            if (nde.idx-1 >= 0 && nde.value > ratings[nde.idx-1]) {
                v = candies[nde.idx-1]
                tgtIdx = nde.idx-1
            }

            if (nde.idx+1 < len && nde.value > ratings[nde.idx+1]) {
                if (tgtIdx !== undefined) {
                    if (candies[nde.idx+1] > v) {
                        tgtIdx = nde.idx+1;
                        v = candies[nde.idx+1]
                    }
                } else {
                    tgtIdx = nde.idx+1;
                    v = candies[nde.idx+1]

                }
            };
            candies[nde.idx] = v
            if (ratings[tgtIdx] !== ratings[nde.idx]) candies[nde.idx]++
        }
        allCandies += candies[nde.idx];
    }
    return allCandies;
};