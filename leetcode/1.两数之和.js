/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      const targetNum = target - element
      const targetNumIndex = map[targetNum]
      if(targetNumIndex !== undefined) {
        return [targetNumIndex,index]
      }
      map[element] = index
    }
};
// @lc code=end

