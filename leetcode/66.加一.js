/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    /**
     * 1.递归,时间复杂度 O(n),空间复杂度O(1)
     */
    // if (digits.length === 1) {//基线条件
    //     if (digits[0] === 9) {
    //         return [1,0]
    //     } else {
    //         return [digits[0] + 1]
    //     }
    // } else {
    //     let last = digits.length - 1
    //     const element = digits[last];
    //     if (element === 9) {//递归条件
    //         return [...plusOne(digits.slice(0,last)),0]
    //     } else {
    //         return [...digits.slice(0,last),element + 1]
    //     }
    // }
    /**
     * 2. 
     */
    for (let index = digits.length - 1; index >= 0; index--){
        digits[index] = (digits[index] + 1) % 10
        if (digits[index] !== 0) return digits
    }
    return [1,...digits]
};
// @lc code=end

