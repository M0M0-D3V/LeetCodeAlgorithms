/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  piles.sort((a, b) => b - a);
  console.log(piles);

  let len = piles.length;
  let left = 1;
  let sum;
  let ans;
  let right = 0;

  for (let i = 0; i < len; i++) {
    right = Math.max(right, piles[i]);
    while (left <= right) {
      sum = 0;
      let mid = left + (right - left) / 2;
      for (let j = 0; j < len; j++) {
        sum += Math.ceil(piles[i] / mid);

        if (sum <= h) {
          ans = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  }
  return ans;
};
// @lc code=end
