/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (!bills.length){
    return false
  }
  let rest = {
    5: 0,
    10: 0
  }
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      rest[5]++
    } else if (bill === 10) {
      if (!rest[5]) {
        return false
      }
      rest[5]--
      rest[10]++
    } else {
      if (rest[5] > 0 && rest[10] > 0) {
        rest[5]--
        rest[10]--
      } else if (rest[5] > 3) {
        rest[5]-=3
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

