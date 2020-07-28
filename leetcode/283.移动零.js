/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /**
     * 1.双指针法
     */
    // let index = 0
    // let zIndex = nums.length - 1
    // while (index < zIndex) {
    //     if(nums[index] === 0) {
    //         nums.splice(index,1)
    //         nums.push(0)
    //         zIndex--
    //     } else {
    //         index++
    //     }
    // }
    // return nums
    /**
     * 2.反向遍历
     */
    for (let index = nums.length - 1; index > -1; index--) {
        if(nums[index] === 0) {
            nums.splice(index,1)
            nums.push(0)
        }
    }
    return nums
};
// @lc code=end

