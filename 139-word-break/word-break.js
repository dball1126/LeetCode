class Node {
    constructor() {
        this.keys = new Map();
        this.isWord = false;
    }
}
// Trie
// Time: O((n * l) + (m * l))...n for slength, m for words length...l for longest word length
var wordBreak = function(s, wordDict) {
    const trie = new Node(), memo =  new Map()

    const insertWord = (wrd) => { // O(l)...for wrd length
        let root = trie;
        for (let i = 0; i < wrd.length; i++) {
            let c = wrd[i]
            if (root.keys.has(c)) {
                root = root.keys.get(c)
            } else {
                let nde = new Node(c)
                root.keys.set(c, nde)
                root = root.keys.get(c)
            }
            if (i === wrd.length-1) root.isWord = true;
        }
    }
    const search = (idx, root, curr) => { // O(l)...for word length
        if (idx >= s.length) return false
        if (memo.has(curr + idx)) return memo.get(curr + idx)
        if (!root.keys.has(s[idx])) {
            return false;
        }
        let next = root.keys.get(s[idx])
        if (idx === s.length-1 && next.isWord) {
            return true;
        }
        let other = false;
        if (next.isWord) {
            let newRoot = trie
            other = search(idx+1, newRoot, s[idx+1])
        }
        let result = search(idx+1, next, curr + s[idx+1]) || other
        memo.set(curr + idx, result)
        return result
    }
    for (let word of wordDict) { // build trie  // O(m * l)...m for words...l for longest word length
        insertWord(word)
    }
    
    for (let i = 0; i < s.length; i++) { // time O(n * l)...s for string length and m for longest word length
        let root = trie
        const valid = search(i, root, s[i])
        return valid
    }

    return false;
};