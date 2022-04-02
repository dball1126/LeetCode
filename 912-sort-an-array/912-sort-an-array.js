/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (n) => {
    if (!n.length) return [];
    let p = n[Math.floor(n.length / 2)]
    let [left, mid, right] = [[],[],[]];
    for (let i = 0; i < n.length; i++) {
        const num = n[i];
        if (num < p) left.push(num)
        if (num > p) right.push(num)
        if (num === p) mid.push(num)
    }
    return [...sortArray(left), ...mid, ...sortArray(right)]
}