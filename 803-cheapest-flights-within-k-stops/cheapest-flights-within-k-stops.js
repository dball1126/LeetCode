/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// DP On Graphs
// Bottom-Up Dynamic Programming
// Bellmans Ford Algorithm
// Time: O(k * (V + E) )
// Space: O(V^2)
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    let vals = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(Infinity))
    for (let [t,f,v] of flights) {
        vals[t][f] = v
    }
    let dists = [...new Array(n+1)].fill(Infinity)
    dists[src] = 0
  
    for (let i = 0; i <= k; i++) {
        let dists2 = [...dists]
        for (let [t,f,v] of flights) {

            if (vals[t][f] !== Infinity) {

                dists2[f] = Math.min(dists2[f], dists[t] + vals[t][f])
            }

        }
        dists = dists2
    }
    return dists[dst] === Infinity ? -1 : dists[dst]
};