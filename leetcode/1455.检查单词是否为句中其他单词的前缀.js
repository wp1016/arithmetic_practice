/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  let wordArray = sentence.split(' ')
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    if(word.startsWith(searchWord)){
      return i + 1
    }
  }
  return -1
};
// @lc code=end

