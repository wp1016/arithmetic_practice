/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s
  }

  if (s.length === 2) {
    return palindrome(s)? s : ''
  }

  let res = ''
  

  return res

};

var palindrome = function(s) {
  let len = s.length
  let mid = Math.floor((s.length -1) / 2)
  for (let index = 0; index < mid; index++) {
    if(s[index] !== s[len - index - 1]) {
      return false
    }
  }
  return true
}
// @lc code=end

