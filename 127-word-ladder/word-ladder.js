/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(begin, end, list) {
    let wordMap = new Map(), min = Infinity, endCount = 0
    list.push(begin,end)
    for (let w of list) {
        if (w === end) endCount++
        if (!wordMap.has(w)) wordMap.set(w, new Set())
        for (let wrd of list) {
            if (w.length === wrd.length && w !== wrd) {
                let c = 0, i = 0, j = 0
                while (c < 2 && i < w.length && j < w.length) {
                    if (w[i] !== wrd[j]) {
                        c++;
                    }
                    i++; j++
                }
                if (c === 1) {
                    wordMap.get(w).add(wrd)
                }
            }
        }
    }
    if (endCount <= 1) return 0

    const bfs = [[begin, 0]]
    const set = new Set()
    while (bfs.length) {
        let [wrd, count] = bfs.shift();
        if (min < count) continue;
        if (wrd === end) {
           return min = Math.min(min+1, count+1); 
        }
        set.add(wrd)
        let arr = wordMap.get(wrd)
        for (let word of arr) {
            if (!set.has(word)) {
                set.add(word)
                bfs.push([word, count + 1])
            }
        }
    }
    return min === Infinity ? 0 : min + 1
};