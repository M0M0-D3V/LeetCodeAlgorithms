/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // placeholders
  let left = 0;
  let right = nums.length - 1;

  // write a loop that cuts the width in half each iteration by using midpoint
  while (left <= right) {
    let midpoint = Math.floor((left + right) / 2);

    // if midpoint is where target is then return midpoint
    if (nums[midpoint] === target) {
      return midpoint;
    }

    // if not midpoint, it's in either left or right half
    // check if right
    if (nums[midpoint] < target) {
      left = midpoint + 1;
    } else {
      // not in right, must be in left
      right = midpoint - 1;
    }
  }
  return -1;
};
// @lc code=end
