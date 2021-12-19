/*
 * @lc app=leetcode.cn id=1573 lang=javascript
 *
 * [1573] 分割字符串的方案数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
  // 分割线的位置有多少种排列组合
  const finalCount = 1000000007
  // 1. 假设字符串长度为n，字符串s中1的数目为m,遍历字符串s，记录每个字符1的下标
  let n = s.length
  let oneSet = []
  for (let i = 0; i < s.length; i++) {
   let char = s.charAt(i)
   if(char === '1'){
     oneSet.push(i)
   }
  }
  let m = oneSet.length
  // 如果m 不是3的倍数，则不存在符合题目要求的分割s 的方案
  if(m % 3 !== 0) {
    return 0
  }
  // 如果m === 0, 则字符串中全是0，分割线选择任意两个位子即可,总数为 (n-1) * (n-2) / 2
  if(m === 0) {
    let count = (n-1) * (n-2)/2
    return count % finalCount
  } else {
    // 如果 m !== 0,
    // 则每个子字符串都包含m/3个字符1，假设3个子字符串从左到右依次为s1,s2,s3
    // 则s1中最后一个1到s2 第一个1的距离 count1就是第一个分割线可以存在的可能性
    // 同理 s2中最后一个1到 s3 第一个1的距离 count2就是第二个分割线可以存在的可能性
    // 则分割方式排列结果为 count1 * count2
    let index1 = m/3, index2 = m*2/3
    let count1 = oneSet[index1] - oneSet[index1 - 1];
    let count2 = oneSet[index2] - oneSet[index2 - 1]
    return count1 * count2 % finalCount
  }
};
// @lc code=end

