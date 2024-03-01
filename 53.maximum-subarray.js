/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let answer = Number.MIN_VALUE;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = temp + nums[i];

    if (temp > answer) {
      answer = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }

  return answer;
};
// @lc code=end
