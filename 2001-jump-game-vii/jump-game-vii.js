/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    let queue = [0], n = s.length, min = 0

    while (queue.length) {
        let i = queue.shift();

        if (i === n-1) return true;
        let newMin = Math.min(i + maxJump, n-1)
        if ((i + minJump) <= newMin) {
 
            if (newMin <= min) continue;
            let begin = Math.max(min+1, i + minJump)

            for (let j = begin; j <= newMin; j++) {
                if (s[j] === '0') {
                    if (j === n-1) return true
                     queue.push(j)
                }
            }
            min = newMin
        }
    }

    return false;
};
