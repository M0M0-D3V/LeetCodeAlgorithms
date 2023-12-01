/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        // Swap non-zero element with zero element
        let temp = nums[nonZeroIndex];
        nums[nonZeroIndex] = nums[i];
        nums[i] = temp;
      }
      nonZeroIndex++;
    }
  }

  return nums;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end
