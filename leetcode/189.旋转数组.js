/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length < 2) {
    return nums
  }
  /**
   * 1. 递归 空间复杂度O(1)
   */
  // if ( k === 0) {
  //   return nums
  // } else {
  //   // 去除数组最后一位
  //   let last = nums.pop()
  //   // 每次移动一步
  //   nums.unshift(last)
  //   rotate(nums, k - 1)
  // }

  /**
   * 2. 简单一次循环
   */

  //  for (let index = 0; index < k; index++) {
  //   nums.unshift(nums.pop())
  //  }

  //  return nums

  /**
   * 3. 一次移动k步
   */
    let last = nums.splice(nums.length - k, k)
    nums.unshift(...last)
    return nums
};
// @lc code=end
