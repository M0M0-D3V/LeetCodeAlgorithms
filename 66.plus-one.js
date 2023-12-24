/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  for (index; index >= 0; index--) {
    digits[index]++;
    if (digits[index] < 10) {
      return digits;
    } else if (digits[index] == 10 && index == 0) {
      digits[index] = 0;
      let placeholder = [1].concat(digits);
      digits = placeholder;
      return digits;
    } else {
      digits[index] = 0;
      continue;
    }
  }
  return digits;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end
