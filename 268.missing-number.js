/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let min = sorted[0];
  let max = sorted[sorted.length - 1];

  for (let i = 0; i < max; i++) {
    if (!sorted.includes(i)) {
      return i;
    }
  }
  if (0 < min) {
    return 0;
  }
  return nums.length;
};
// @lc code=end
