var calculate = function(s) {
    
    let lastNum = 0, currNum = 0, result = 0, opt = "+";

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== " " && !isNaN(s[i])) {
            currNum = (currNum * 10) + parseInt(s[i]);
        }

        if (i === s.length-1 || (s[i] !== " " && isNaN(s[i]))) {
            if (opt === "+" || opt === "-") {
                result += lastNum;
                lastNum = opt === "+" ? currNum : -currNum;
            } else if (opt === "/") {
                lastNum = Math.trunc(lastNum / currNum);
            } else if (opt === "*") {
                lastNum*=currNum
            }
            currNum = 0;
            opt = s[i];
        }
    }
    return result + lastNum;
};