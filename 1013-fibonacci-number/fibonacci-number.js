var fib = function(n) {
    const memo = [...new Array(n+1)]
    const dp = (num) => {
        if (num === 0) return 0;
        if (num === 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        return memo[num] = dp(num-1)  + dp(num-2)
    }
    return dp(n)
};