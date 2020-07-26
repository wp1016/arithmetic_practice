/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let zeroRows = {} // 记录有0的所有行
  let zeroCols = {} // 记录有0的所有列

  const row = matrix[0];
  for (let rIndex = 0; rIndex < matrix.length; rIndex++) {
    for (let cIndex = 0; cIndex < row.length; cIndex++) {
      const element = matrix[rIndex][cIndex];
      if (element === 0) {
        zeroCols[cIndex] = false
        zeroRows[rIndex] = false
      }
    }
  }
  for (let rIndex = 0; rIndex < matrix.length; rIndex++) {
    const row = matrix[rIndex];
    for (let cIndex = 0; cIndex < row.length; cIndex++) {
      if (zeroCols[cIndex] === false || zeroRows[rIndex] === false) {
        matrix[rIndex][cIndex] = 0
      }
      
    }
  }
  
};
// @lc code=end

