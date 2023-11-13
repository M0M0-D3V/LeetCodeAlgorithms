/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let trackTall = height[0];
  let len = height.length;
  // compare two walls from left at a time
  let leftPos = 0;
  let leftWall = height[leftPos];
  let rightPos = leftPos + 1;
  let rightWall = height[rightPos];
  let totalUnits = 0;

  // continue loop so left does not cross over right
  while (leftPos < rightPos && rightPos < len) {
    // start rightPos next to left
    let dist = rightPos - leftPos;

    // find a left wall
    if (leftWall <= 0) {
      leftPos++;
      leftWall = height[leftPos];
      rightPos++;
      rightWall = height[rightPos];
    }
    // if right wall is smaller than left, add the height diff to totalunit
    if (leftWall > rightWall) {
      totalUnits += leftWall - rightWall;
      console.log(totalUnits);
    }
    // check if next right wall is smaller
    // find difference in height inside the walls compared to smaller wall
    if (rightPos < len) {
      rightPos++;
    }
    // keep track left wall if taller
    // add to total units
  }
  return totalUnits;
};
// @lc code=end
