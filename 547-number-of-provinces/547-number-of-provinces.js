class DisJoinSet {
    root = []
    rank = []
    provinces = 0
    constructor(a) { this.init(a) }
    init(a) {
        this.provinces = a.length
        for (let i = 0; i < a.length; i++) {
            this.rank[i] = 1
            this.root[i] = i
        }
    }
    find(n) {
        if (n === this.root[n]) return n;
        return this.root[n] = this.find(this.root[n])
    }
    union(n1, n2) {
        let [p1, p2] = [this.find(n1), this.find(n2)]
        if (p1 === p2) return;
        this.provinces--;
        
        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2;
        } else {
            this.root[p2] = p1;
            this.rank[p1]++
        }
    }
}
/**
 * Union Find
 * Time and Space: O(V + E)
 */
var findCircleNum = function(isConnected) {
    const unionSet = new DisJoinSet(isConnected);
    
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (i !== j && isConnected[i][j] === 1) {
                unionSet.union(i, j)
            }
        }
    }
    
    return unionSet.provinces
};
