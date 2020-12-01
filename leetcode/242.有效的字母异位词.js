/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /**
   * 1.排序对比
   */
  // return s.split('').sort().join('') === t.split('').sort().join('')
  /**
   * 2. hashtable
   */
  if (s.length !== t.length) {
    return false
  }
  let hash = {}

  for (let index = 0; index < s.length; index++) {
    const si = s[index];
    if (!hash[si]){
      hash[si] = 0
    } 
    hash[si]++
    const ti = t[index]
    if (!hash[ti]){
      hash[ti] = 0
    }
    hash[ti]--
  }

  for (const val of Object.values(hash)) {
    if (val !== 0) {
      return false
    }
  }

  return true
};
// @lc code=end

