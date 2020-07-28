/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false
    }
    let reverse = 0;
    let num = x
    while (num !== 0){
        reverse = reverse * 10 + num % 10
        num = (num / 10) | 0
    }
    return reverse === x
};
// @lc code=end
