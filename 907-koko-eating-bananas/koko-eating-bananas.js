/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let high = -Infinity, avg = Infinity, low = 0
    piles.forEach(p => high = Math.max(high, p));
    const getAvg = (v) => {
        let k = 0
        piles.forEach(p => k += Math.ceil(p / v))
        return k
    }
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1;
        let average = getAvg(m);
        if (average > h) {
            low = m;
        } else {
            high = m - 1
            avg = Math.min(avg, m)
        }
    }
    return avg
};