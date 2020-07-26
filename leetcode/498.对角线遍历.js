/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  // 遍历数组，角标之和递增输出
  if(matrix.length === 0){
    return []
  }
  let res = []
  let r = 0
  let c = 0
  let col = matrix[0].length
  let row = matrix.length
  
  for (let i = 0; i < col * row; i ++) {
    //偶数向上遍历
    res[i] = matrix[r][c]
    if((r + c) % 2 === 0) {
      if (c === col -1) { // 当遍历到左后一列时，本次遍历结束，下移一行为下次遍历做准备
        
        r++
      } else if (r === 0) { // 当遍历到第一行时，本次遍历结束，向右移动一格为下次遍历做准备
        // 往移动一格准备向下遍历
        c++
      } else { // 一般向上对角线遍历
        r--
        c++
      }
    } else { // 奇数向下遍历
      if (r === row - 1){ // 向下遍历到最后一行时本次遍历结束,向右移动一格，为下一行遍历做准备
        c++
      } else if (c === 0) { // 当向下遍历到第一列时本次遍历结束，向下移动一行为下一行遍历做准备
        r++
      } else { // 一般向下对角线遍历
        r++
        c--
      }
    }
  }

  return res
};
// @lc code=end

