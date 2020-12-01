/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  /**
   * 1.暴力法
   */
  // let string = s.replace(/(\s|[^a-z0-9])*/ig,'').toLowerCase()
  // return string.split('').reverse().join('') === string
  /**
   * 2. 双指针
   */

   s = s.toLowerCase() // 将字符串转换成小写
   let a = 0
   let b = s.length - 1
   let reg = /[a-z0-9]/
   while(a < b) {
     if(s[a] === s[b]) {
      a++
      b--
     } else if (!reg.test(s[a])) {
       a++
     } else if (!reg.test(s[b])) {
       b--
     } else {
       return false
     }
   }
   return true
};
// @lc code=end

