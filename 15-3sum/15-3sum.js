function threeSum(n) {
    if (n.length <= 2) return []
    n.sort((a,b)=> a-b);
    let result = [];
    
    for (let i = 0; i < n.length; i++) {
        let [s, e] = [i+1, n.length-1]
        while (s < e) {
            let v = n[i] + n[s] + n[e]
            if ( v === 0) {
                result.push([n[i], n[s], n[e]])
            }
            if (v > 0) {
                e--
                while (s < e && n[e+1] === n[e]) e--
            } else {
                s++
                while (s < e && n[s-1] === n[s]) s++
            }
        }
        while (n[i+1] === n[i]) i++
    }
    return result
}