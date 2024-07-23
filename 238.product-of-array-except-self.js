/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  // hold answers in answers array
  let answers = [];
  let leftProd = [];
  let rightProd = [];

  leftProd[0] = 1;
  rightProd[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    leftProd[i] = leftProd[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProd[i] = rightProd[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answers[i] = leftProd[i] * rightProd[i];
  }
  return answers;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
