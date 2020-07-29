/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 暴力法 时间复杂度 O(n)
  if(strs.length === 1) {
    return strs[0]
  }
  strs.sort((a,b) => a.length - b.length)
  let commonPrefix = ''
  let firstStr = strs[0]
  if(!firstStr) return commonPrefix
  for (let index = 0; index < firstStr.length; index++) {
    let prefix = firstStr.substr(0, index + 1)
    if (strs.every(str => str.indexOf(prefix) === 0)) {
      commonPrefix = prefix
    } else {
      break
    }
  }
  return commonPrefix
};
// @lc code=end

