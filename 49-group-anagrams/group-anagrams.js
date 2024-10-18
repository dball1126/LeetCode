/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = new Map()

    for (let str of strs) {
        let chars = [...new Array(26)].fill(0)
        for (let i = 0 ; i < str.length; i++) {
            let idx =str[i].charCodeAt() - "a".charCodeAt()
            chars[idx]+=1
        }
        let k = ""
        chars.forEach((v, idx) => {
            if (v > 0) {
                k += (idx + ":" + v)
            }
        })

        if (!groups.has(k)) groups.set(k, [])
        groups.get(k).push(str)
    }

    let result = []

    for (let [k, v] of groups) {
        result.push(Array.from(v))
    }
    return result
};