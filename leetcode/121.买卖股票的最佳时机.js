/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <= 1 ) {
    return 0
  }
  let min = prices[0]
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    const element = prices[i];
    if (element < min) {
      min = element
    } else if (element - min > max) {
      max = element - min
    }
  }

  return max
};
// @lc code=end

