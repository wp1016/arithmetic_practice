/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /**
     * hashtable
     */
    let hashBlock = {}
    let hashRow = {}

    for (let index = 0; index < board.length; index++) {
        hashRow[index] = {}
        hashBlock[index] = {}
    }

    for (let i = 0; i < board.length; i++) {
        let hashCol = {}
        for (let j = 0; j < board.length; j++) {
            const element = board[i][j];
            if (element !== '.') {
                if (!hashCol[element]){
                    hashCol[element] = 1
                } else {
                    return false
                }

                // 判断每一列
                if (!hashRow[j][element]){
                    hashRow[j][element] = 1
                } else {
                    return false
                }
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                 
                // 判断每一块
                if(!hashBlock[boxIndex][element]){
                    hashBlock[boxIndex][element] = 1
                }else{
                    return false
                }
            }
            
        }
    }

    return true

};
// @lc code=end

