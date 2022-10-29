/** Backtracking
 * Time and Space: O(!N)
 */
 const permute = (arr) => {
    let perms = [];
    const backtracking = (i, curr) => {
        if (i >= arr.length) return;
        if (curr.size === arr.length) return perms.push(Array.from(curr))

        for (let j = i; j < arr.length; j++) {
            if (!curr.has(arr[j])) {
                backtracking(0, curr.add(arr[j]))
                curr.delete(arr[j])
            }
        }
    }
    backtracking(0, new Set());
    return perms
}