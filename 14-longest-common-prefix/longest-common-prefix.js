/**
 * @param {string[]} strs
 * @return {string}
 */
class Node {
    constructor() {
        this.isWord = false;
        this.map = new Map();
        this.count = 0;
    }
}
var longestCommonPrefix = function(strs) {
    let trie = new Node(), maxLength = 0, prefix = "";
    const longestPrefix = (w) => {
        let curr = trie, currPrefix = "";
        for (let i = 0; i < w.length; i++) {
            if (!curr.map.has(w[i])) curr.map.set(w[i],new Node());
            curr = curr.map.get(w[i]);
            currPrefix += w[i];
            curr.count++

            if (curr.count >= strs.length && curr.count >= maxLength) {
                maxLength = curr.count;
                prefix = currPrefix;
            }
        }
    }
    for (let word of strs) {
        longestPrefix(word)
    }
    return prefix;
};