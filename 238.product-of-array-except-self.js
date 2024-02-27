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
  let idx = 0;
  let answer = [];
  while (idx < nums.length) {
    answer[idx] = 1;
    for (let i = 0; i < nums.length; i++) {
      if (i != idx) {
        answer[idx] = answer[idx] * nums[i];
      }
    }
    idx++;
  }
  console.log(answer);
  return answer;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = productExceptSelf;
// @after-stub-for-debug-end
