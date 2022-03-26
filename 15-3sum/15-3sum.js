function threeSum(n) {
    n.sort((a,b)=> a-b); const map = new Map();

    for (let i = 0; i < n.length-2; i++) {
        let [l, r] = [i+1, n.length-1]
        
        while (l < r) {
            let [n1, n2, n3] = [n[i], n[l], n[r]]
            let k = n1 + "" + n2 + "" + n3

            if (n1+n2+n3 === 0 && !map.has(k)) {
                map.set(k, [n1,n2,n3])
                l++; r--;
            } else if (n1+n2+n3 < 0) {
                l++
                while (n[l] === n[l-1]) l++
            } else {
                r--
                while (n[r+1] === n[r]) r--
            }
        }   
    }
    return Array.from(map.values())
};