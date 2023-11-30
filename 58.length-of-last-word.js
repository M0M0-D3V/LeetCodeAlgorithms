/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end
