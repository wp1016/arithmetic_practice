/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = []
  let vis = new Array(nums.length).fill(false)
  const dfs = function (arr, index) {
    if (index === nums.length) {
      result.push(arr.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i>0 && nums[i] === nums[i-1] && !vis[i-1])){
        continue
      }
      arr.push(nums[i])
      vis[i] = true
      dfs(arr, index+1)
      vis[i] = false
      arr.pop()
    }
  }
  nums.sort((x,y) => x-y)
  dfs([],0)
  return result
};
// @lc code=end

