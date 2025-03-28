/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0;
    let minPrice = prices[0], profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return profit;
};