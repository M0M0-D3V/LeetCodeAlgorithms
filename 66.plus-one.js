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
  let toString = digits.join("");
  toString++;
  console.log(toString);
  return Array.from(toString.toString());
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end