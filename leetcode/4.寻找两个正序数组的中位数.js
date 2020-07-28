/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0){
        return calculate(nums2)
    } 
    if (nums2.length === 0) {
        return calculate(nums1)
    }
    let low1 = 0
    let low2 = 0
    let high1 = nums1.length - 1
    let high2 = nums2.length - 1

    let arr = []
    while (low1 <= high1 && low2 <= high2) {
        let mid1 = Math.floor((low1 + high1) / 2)
        let mid2 = Math.floor((low2 + high2) / 2)
        if (nums1[mid1] < nums2[mid2]) {
            arr = arr.concat(nums1.slice(low1, mid1 + 1))
            low1 = mid1 + 1
        } else if (nums1[mid1] > nums2[mid2]) {
            arr = arr.concat(nums2.slice(low2, mid2 + 1))
            low2 = mid2 + 1
        } else {
            arr.concat(nums1.slice(low1, mid1 + 1))
        }
    }
    if(low1 > high1){
        arr = arr.concat(nums2.slice(low2))
    }
    if(low2 > high2) {
        arr = arr.concat(nums1.slice(low1))
    }   
    return calculate(arr)
};

var calculate = function (arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    let len = arr.length
    let midIndex = Math.floor((arr.length - 1 ) / 2)
    if (len % 2 === 1) {
        return arr[midIndex]
    } else {
        return (arr[midIndex] + arr[midIndex + 1]) / 2
    }
}
// @lc code=end
findMedianSortedArrays([1,2],[1,2,3])