var addOperators = function(num, target) {
    const result = [];

    const backtrack = (idx, curr, prev, str) => {
        if (idx === num.length) {
            if (curr === target) return result.push(str);
            return;
        }
        let val = 0;
        for (let i = idx; i < num.length; i++) {
            if (i >= idx+1 && val === 0) return;
            val = (val * 10) + parseInt(num[i]);
            if (!str.length) {
                backtrack(i+1, val, val, val + "");
            } else {
                // handle addition
                backtrack(i+1, curr + val, val, str + "+" + val);
                // handle substraction
                backtrack(i+1, curr - val, -val, str  + "-" + val);
                // handle multiplication
                backtrack(i+1, (curr - prev) + prev * val, prev * val, str + "*" + val);
            }
        }
    }
    backtrack(0,0,0,"");
    return result;
};