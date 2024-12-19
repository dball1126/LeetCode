/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();

    for (let str of strs) {
        let abc = [...new Array(26)].fill(0);
        let key = "";
        for (let i = 0; i < str.length; i++) {
            abc[str[i].charCodeAt() - "a".charCodeAt()] += 1
        }
        for (let i = 0; i < abc.length; i++) {
            if (abc[i] > 0) {
                key += (i + ":" + abc[i] + ";");
            }
        }
        if (!groups.has(key)) groups.set(key, [])
        groups.get(key).push(str)
    }
    return Array.from(groups.values());
};