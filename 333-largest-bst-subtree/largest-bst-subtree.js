class Node {
    constructor(min,max,count) {
        this.min = min; this.max = max; this.count = count;
    }
}
// Depth-First-Search
// Time: O(n)
// Space: O(h)
var largestBSTSubtree = function(root) {
    let max = 0;
    const dfs = (nde) => {
        if (!nde) {
            return new Node(Infinity, -Infinity, 0);
        }
        let left = dfs(nde.left), right = dfs(nde.right);

        if (left.max >= nde.val || right.min <= nde.val) {
            return new Node(-Infinity,Infinity, 0);
        } else {
            max = Math.max(max, 1 + left.count + right.count);
            return new Node(Math.min(left.min,nde.val),
                            Math.max(right.max, nde.val),
                            1 + left.count + right.count)
        }
    }
    dfs(root);
    return max;
};