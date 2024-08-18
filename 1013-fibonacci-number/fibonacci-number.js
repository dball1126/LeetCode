// Bottom Up Dynamic Programming
// Time and Space: O(n)
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1 
    prev2 = 0
    prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let newPrev = prev1 + prev2
        prev2 = prev1
        prev1 = newPrev
    }
    return prev1
};