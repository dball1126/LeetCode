var calculate = function(s) {
    if (!s) return 0;
    let stack = [], i = 0
    const isNum = (v) => v >= "0" && v <= "9" 
    const getNum = (v) => {
        while (i+1 < s.length && isNum(s[i+1])) {
            v += s[i+1] 
            i++;
        }
        return v
    }
    while (i < s.length) {
        if (s[i] === " ") {
            i++;
            continue;
        } else if (isNum(s[i])) {
            let v = getNum(s[i])
            stack.push(parseInt(v))
        } else if ("+-".includes(s[i])) {
            stack.push(s[i])
        } else if (s[i] === "*") {
            i++;
            let v = getNum(s[i])
            stack.push(stack.pop() * parseInt(v))
        } else if (s[i] === "/") {
            i++;
            let v = getNum(s[i])
            stack.push(Math.floor(stack.pop() / parseInt(v)))   
        }
        i++
    }
    stack = stack.reverse()
    while (stack.length > 1) {
        let num1 = stack.pop();
        let opt = stack.pop();
        let num2 = stack.pop();
        if (opt === '+') {
            stack.push(num1 + num2)
        } else {
            stack.push(num1 - num2)
        }
    }
    return stack[0]
};