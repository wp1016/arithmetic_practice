/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length < 2) {
    return 0
  }

  /**
   * 暴力法
   */
  // let lIndex = 0
  // let rIndex = height.length - 1
  // let w =  rIndex - lIndex // 计算容器的宽
  // let h = Math.min(height[lIndex],height[rIndex]) // 计算容器的高
  // let square = h * w
  // for (let f = 0; f < height.length; f++) {
  //   for (let e = height.length - 1; e > f; e--) {
  //     let h = Math.min(height[f], height[e])
  //     let w = e - f
  //     if (h * w > square) {
  //       square = w * h
  //     }
  //   }
  // }

  /**
   * 双指针法
   */

  let square = 0
  let lIndex = 0 // 左指针
  let rIndex = height.length - 1 // 右指针
  while (lIndex !== rIndex) {
    // 如果左边柱子比右边矮
    if (height[lIndex] <= height[rIndex]) {
      square = Math.max(height[lIndex] * (rIndex - lIndex), square)
      lIndex++
    } else {
      square = Math.max(height[rIndex] * (rIndex - lIndex), square)
      rIndex--
    }

  }


  return square
};
// @lc code=end

