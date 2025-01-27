var minEatingSpeed = function(piles, h) {
    let hi = -Infinity;
    let maxSpeed = Infinity
    piles.forEach(p => hi = Math.max(hi, p));

    let lo = 0

    const getAvg = (v) => {
        let k = 0;
        piles.forEach(p => k += Math.ceil(p / v));
        return k;
    }

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2) + 1;

        let avg = getAvg(m);
        if (avg > h) {
            lo = m;
        } else {
            maxSpeed = Math.min(maxSpeed, m)
            hi = m -1;
        }
    }
    return maxSpeed;
};