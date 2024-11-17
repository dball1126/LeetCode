/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let min =  Infinity

    let dp1 = [...new Array(tops.length+1)].map(a => [...new Array(7)].fill(Infinity))
    let dp2 = [...new Array(bottoms.length+1)].map(a => [...new Array(7)].fill(Infinity))

    for (let i = 0; i < tops.length; i++) {
        let v1 = tops[i], v2 = bottoms[i]
        dp1[i][v1] = 0
        dp2[i][v2] = 0
        let v = v1 === v2 ? 0 : 1
        dp1[i][v2] = v
        dp2[i][v1] = v
    }

    for (let i = 1; i < tops.length; i++) {

        for (let die = 1; die <= 6; die++) {
            if ( i < tops.length) {
            }
           if (tops[i] === die) {
            dp1[i][die] = dp1[i-1][die]
           } else if (die === bottoms[i]) {
            dp1[i][die] = dp1[i-1][die] + 1
           }
           if (bottoms[i] === die) {
            dp2[i][die] = dp2[i-1][die]
           } else if (tops[i] === die) {
            dp2[i][die] = dp2[i-1][die] + 1
           }
           if ( i === tops.length-1) {
               min = Math.min(min, dp1[i][die], dp2[i][die])
           }
        }
    }
    return min === Infinity ? -1 : min
};