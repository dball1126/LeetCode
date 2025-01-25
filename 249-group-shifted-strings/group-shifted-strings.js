/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let strMap = new Map();
    for (let s of strings) {
        let key = "";
        for (let i = 1; i < s.length; i++) {
            let val = (26 + s[i-1].charCodeAt() - s[i].charCodeAt()) % 26;
            key += (":"  + val);
        }
        if (!strMap.has(key)) strMap.set(key, []);
        strMap.get(key).push(s);
    }
    return Array.from(strMap.values());
};