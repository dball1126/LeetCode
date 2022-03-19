 var checkIfExist = function(arr) {
    !arr.sort()
    const bSearch = (s, e, val) => {
        if (s >= e) return false;
        let m = Math.floor(e - s) + s
        if ((arr[m] * 2 === val) || (val * 2 === arr[m])) return true
       
        if ( val > arr[m]) {
            s = m + 1
        } else {
            e = m - 1
        }
        return bSearch(s, e, val)
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (bSearch(i, j, arr[i])) return true            
        }
    }
    return false
};