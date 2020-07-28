/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        // 从最后一位开始取每一位
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    // 如果超过32位则 位运算 0 不等于自身
    return (result | 0) === result ? result : 0;
};
// @lc code=end

