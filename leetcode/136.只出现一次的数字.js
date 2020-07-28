/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /**
     * 时间复杂度 O(n)
     * 空间复杂度 O(n)
     */
    // let hash = {}
    // for (let index = 0; index < nums.length; index++) {
    //     const element = nums[index];
    //     if (hash[element]) {
    //         hash[element]++
    //     } else {
    //         hash[element] = 1
    //     }
    // }
    // let num = null
    // for (const key in hash) {
    //     if (hash.hasOwnProperty(key)) {
    //         const element = hash[key];
    //         if(element === 1) {
    //             num = key
    //         }
    //     }
    // }
    // return num
    /**
     * 利用位运算的异或特性
     * 时间复杂度 O(n)
     * 空间负责度 O(1)
     */
    for (let index = 1; index < nums.length; index++) {
       nums[0] ^= nums[index]
    }
    return nums[0]
};
// @lc code=end

