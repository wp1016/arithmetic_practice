/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  /**
   * 1. 暴力法
   */
  // let arr = []

  // for (let index = 0; index < nums1.length; index++) {
  //   const element = nums1[index];
  //   let index2 = nums2.indexOf(element)
  //   if (index2 > -1) {
  //     arr.push(nums1.splice(index, 1))
  //     nums2.splice(index2, 1)
  //     index--
  //   }
  // }

  /**
   * 2. 双指针
   */
  // 1.对数组排序

  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)
  let index1 = 0
  let index2 = 0
  let arr = []
  while(index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] > nums2[index2]) {
      index2++
    } else if (nums1[index1] < nums2[index2]) {
      index1++
    } else {
      arr.push(nums1[index1])
      index1++
      index2++
    }
  }

  /**
   * 3. hash表
   */

  //  if (nums1.length > nums2.length) {
  //    return intersect(nums2, nums1)
  //  }

  //  let hash = {}
  //  for (let index = 0; index < nums1.length; index++) {
  //    const element = nums1[index];
  //    if (!hash[element]) {
  //      hash[element] = 1
  //    } else {
  //      hash[element]++
  //    }
  //  }

  //  let arr = []
  //  for (let index = 0; index < nums2.length; index++) {
  //    const element = nums2[index];
  //    if (hash[element] > 0) {
  //       arr.push(element)
  //       hash[element]--
  //    }
     
  //  }


  return arr
};
// @lc code=end