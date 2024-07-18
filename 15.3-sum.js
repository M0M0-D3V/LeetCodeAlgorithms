/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length == 3 && nums[0] + nums[1] + nums[2] != 0) {
    return [];
  }
  nums.sort();
  if (nums[0] > 0) {
    return [];
  }
};
// @lc code=end
