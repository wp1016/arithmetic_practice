/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) {
    return false
  }
  let k = dividend ^ divisor < 0 ? '-' : ''
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let count = 1
  let result = 0
  while (divisor <= dividend) {
    divisor += divisor
    count++
  }
  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    return  Number.MAX_SAFE_INTEGER
  }
  return 
};
// @lc code=end

