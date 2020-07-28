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
    /**
     * 1.散列表
     */
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      const targetNum = target - element
      const targetNumIndex = map.get(targetNum)
      if(targetNumIndex !== undefined) {
        return [targetNumIndex,index]
      }
      map.set(element,index)
    }
};
// @lc code=end

