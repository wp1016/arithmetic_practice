/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // 冒泡
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if (nums[i] >= nums[j]) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]]
  //     }
  //   }
  // }
  // return nums

  // 快排
  if(nums.length <= 1){
    return nums
  }
  let len = nums.length

  let baseNum = nums[0]
  let leftArr = []
  let rightArr = []
  for (let i = 1; i < len; i++) {
    if (nums[i] <= baseNum) {
      leftArr.push(nums[i])
    } else if (nums[i] > baseNum){
      rightArr.push(nums[i])
    }
  }
  return sortArray(leftArr).concat(baseNum,sortArray(rightArr))
};
// @lc code=end

