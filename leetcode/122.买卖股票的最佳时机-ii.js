/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  for (let index = 1; index < prices.length; index++) {
    if (prices[index] > prices[index - 1]) {
      max += prices[index] - prices[index - 1]
    }
  }
  return max
};
// @lc code=end

