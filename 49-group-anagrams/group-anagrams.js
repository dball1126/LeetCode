// Hash Map
// Time: O((n * m)^2)...n for # of words, m for longest word
// Space: O(n * m)
var groupAnagrams = function(strs) {
    const groups = []
    for (let s of strs) {
        let map = new Map(), merged = false
        for (let i = 0; i < s.length; i++) { // populate curr string map
            if (!map.has(s[i])) map.set(s[i], 0)
            map.set(s[i], map.get(s[i]) + 1)
        }
        for (let grp of groups) {
            for (let w of grp) { // find matching group
                if (w.length !== s.length) continue;

                const m = new Map(map)
                for (let i = 0; i < w.length; i++) { // check if anagram
                    if (!m.has(w[i])) break;

                    m.set(w[i], m.get(w[i]) - 1)
                    if (m.get(w[i]) === 0) m.delete(w[i])
                }
                if (!m.size) {
                    grp.push(s);  merged = true; break;
                }
            }
            if (merged) break;
        }
        if (!merged) groups.push([s])
    }
    return groups
};