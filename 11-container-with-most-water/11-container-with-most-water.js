/**
 * 2 pointer, start from edges, collect two max values from the input
 * Time: O(n) + O(n) + O(1) = O(n)
 * Space: O(1)
 */
 var maxArea = function(n) {
    let [m1, m2, mArea, l, r] = [n[0], n[1], -Infinity, 0, n.length-1]
    for (let i = 2; i < n.length; i++) {
        let v = n[i]
        if (v > m1) {
            if (m2 < m1) {
                m2 = m1;
                m1 = v;
            } else {
                m1 = v
            }
        } else if (v > m2) {
            m2 = v
        }
    }
    while (l < r) {
        mArea = Math.max(mArea, Math.min(n[l], n[r]) * (r-l))
        if ((n[l] === m1 && n[r] === m2) || (n[l] === m2 && n[r] === m1)) {
            return mArea;
        }
        if (n[l] > n[r]) {
            r--
        } else {
            l++
        }
    }
};