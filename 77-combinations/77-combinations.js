/**
 * Backtracking.
 */
const combine = (n, k) => {
    let combos = [];
    const getCombos = (j, curr) => {
        if (j > n) return;
        curr.push(j)
        if (curr.length === k) {
            combos.push([...curr])
            return;
        }
        for (let i = j+1; i <= n; i++) {
            getCombos(i, curr)
            curr.pop();
        }
    }
    for (let i = 1; i <= n; i++) {
        getCombos(i, [])
    }
    return combos;
}