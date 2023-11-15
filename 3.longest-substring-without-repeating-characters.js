/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // convert to array
  let copyS = s.split("");
  // unique holder
  let uniqueSet = new Set();
  // bag of holdings
  let bag = [];
  let longest = 0;

  // loop through array and check set for unique
  for (let pos = 0; pos < copyS.length; pos++) {
    let char = copyS[pos];
    // check unique and add
    if (!uniqueSet.has(char)) {
      uniqueSet.add(char);
      bag.push(char);
    }
    // if not unique
    else {
      // check and store longest
      if (longest < bag.length) {
        longest = bag.length;
      }
      // move back pos to next starting char
      pos -= bag.length;
      // empty bag and clear uniqueSet
      uniqueSet.clear();
      bag = [];
    }
  }
  return longest < bag.length ? bag.length : longest;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
