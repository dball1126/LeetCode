/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = new Map([[0,0],[1,1]])) {
  if (memo.has(n)) return memo.get(n);
  memo.set(n, fib(n-1, memo) + fib(n-2, memo))
  return memo.get(n)
};