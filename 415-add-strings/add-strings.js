var addStrings = function(num1, num2) {
    let carry = 0, result = "", i = num1.length-1, j = num2.length-1;
    while (i >= 0 || j >= 0) {
        let n1 = 0, n2 = 0;
        if (i >= 0) n1 = parseInt(num1[i]);
        if (j >= 0) n2 = parseInt(num2[j]);
        let val = n1 + n2 + carry;
        carry = Math.floor(val / 10);
        result = (val % 10) + result;
        i--; j--;
    }
    if (carry) result = carry + result;
    return result;
};