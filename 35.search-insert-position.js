/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length;
  let last = len - 1;
  let start = 0;
  // check beginning
  if (target < nums[start]) {
    return 0;
  }
  // check end
  if (target > nums[last]) {
    return len;
  }
  // compare target to middle
  while (start <= last) {
    len = last - start;
    let mid = Math.floor((start + last) / 2);

    console.log(`start ${start}; mid ${mid}; last ${last}`);

    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return start;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end
