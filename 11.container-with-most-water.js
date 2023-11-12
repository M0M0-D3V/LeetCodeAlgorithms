/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length;
  // area is calculated by l x h
  let rightPos = len - 1;
  let leftPos = 0;
  let maxArea = 0;

  // loop from both ends of array
  // avoid negative distance
  while (leftPos < rightPos) {
    let leftWall = height[leftPos];
    let rightWall = height[rightPos];
    let distance = rightPos - leftPos;
    let currentArea = 0;

    // multiply the l x smaller height between the 2 walls (area)
    leftWall > rightWall
      ? (currentArea = rightWall * distance)
      : (currentArea = leftWall * distance);

    console.log(currentArea);
    // compare to maxArea and reassign if higher
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    // check which of the walls are smaller
    leftWall < rightWall ? leftPos++ : rightPos--;
  }
  return maxArea;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxArea;
// @after-stub-for-debug-end
