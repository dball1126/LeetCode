var isMatch = function(s, p) {
    const recurse = (i, j) => {
        if (i === s.length && j >= p.length) return true;
        if (j >= p.length) return false;

        let v1 = false, v2 = false, v3 = false;

        if (s[i] === p[j] || p[j] === '.') {
            v1 = recurse(i+1, j+1);
            if (v1) return true;
        }
        if (p[j+1] === '*') {
            v2 = recurse(i, j+2);
            if (v2) return true;
            if (i < s.length && (p[j] === s[i] || p[j] === '.')) {
                v3 = recurse(i+1, j);
                if (v3) return true;
            }
        }
        return v1 || v2 || v3;
    }
    return recurse(0 , 0);
};