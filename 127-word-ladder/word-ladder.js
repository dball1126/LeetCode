// Breadth First Search
// Time & Space: O(n * m^2)...n for # of words and m for the longest word.
// The queue can have n * m combinations and then we iterate over M again for m^2
var ladderLength = function(beginWord, endWord, wordList) {
    let map = new Map();
    let minTransform = Infinity
    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i];
        for (let j = 0; j < word.length; j++) {
            let prefix = j-1 >= 0 ? word.slice(0, j) : ""
            let key = prefix + "#" + word.slice(j+1)
            if (!map.has(key)) map.set(key, new Set());
            map.get(key).add(i)
        }
    }
    let queue = [[beginWord, 1]], visited = new Set();
    while (queue.length) {
        let [word, count] = queue.shift();
        visited.add(word);
        if (word === endWord) {
            return minTransform = Math.min(minTransform, count);
        }
        for (let j = 0; j < word.length; j++) {
            let prefix = j-1 >= 0 ? word.slice(0, j) : ""
            let key = prefix + "#" + word.slice(j+1)
            if (map.has(key)) {
                for (let idx of Array.from(map.get(key))) {
                    if (!visited.has(idx)) {
                        visited.add(idx)
                        queue.push([wordList[idx], count + 1]);
                    }
                }
            }
        }
    }
    return minTransform === Infinity ? 0 : minTransform
};