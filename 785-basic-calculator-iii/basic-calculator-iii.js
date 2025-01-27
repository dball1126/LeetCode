var calculate = function(s, i = 0) {
    let currNum = 0, lastNum = 0, result = 0, sign = "+";

    while (i < s.length) {
        const char = s[i];
        if (!isNaN(char) && char !== " ") {
            currNum = (currNum * 10) + parseInt(char);
        }

        if (isNaN(char) || i === s.length-1) {
            if (char === "(") {
                let [newIdx, newCurrSum] = calculate(s, i+1);
                i = newIdx;
                currNum = newCurrSum;
            }

            if (sign === "+") {
                result += lastNum;
                lastNum = currNum;
            } else if (sign === "-") {
                result += lastNum;
                lastNum = -currNum;
            } else if (sign === "/") {
                lastNum = Math.trunc(lastNum / currNum);
            } else if (sign === "*") {
                lastNum *= currNum;
            }

            if (char === ")") {
                return [i, result + lastNum];
            }
            currNum = 0;
            sign = char;
        }
        i++;
    }
    return result + lastNum;
};