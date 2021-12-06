/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
 const res = []
 const hash = {}
 
 const dfs = function(arr) {
   if (arr.length === nums.length) {
     res.push(arr)
     return
   }
   for (let i = 0; i < nums.length; i++) {
     const item = nums[i];
     if (!hash[item]){
       hash[item] = true
       const newArr = arr.concat(item)
       dfs(newArr)
       hash[item] = false
     }
   }
 }
 dfs([])
 return res
};
// @lc code=end

