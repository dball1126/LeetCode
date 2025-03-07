/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []

    const calculate = () => {
        let curr = ''
        while (stack[stack.length-1] !== "[") {
            curr = stack.pop() + curr
        }
        stack.pop();
        let repeat = ''
        while (!isNaN(stack[stack.length-1])) {
            repeat = stack.pop() + repeat
        }
        let finalStr = ''
        let count = parseInt(repeat)
        while (count) {
            finalStr += curr
            count--
        }
        return finalStr
    }

    for (let c of s) {
        if (c === "]") {
            stack.push(calculate(stack))
        } else {
            stack.push(c)
        }
    }
    return stack.join("")
};