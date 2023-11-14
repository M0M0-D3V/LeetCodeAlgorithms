/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 2) {
    return prices[0] > prices[1] ? 0 : prices[1] - prices[0];
  }
  // left and right
  let left = 0;
  let right = left + 1;
  let maxProfit = 0;

  // stop when left overlaps right
  while (right <= prices.length) {
    let price1 = prices[left];
    let price2 = prices[right];
    let change = price2 - price1;

    if (maxProfit < change && change > 0) {
      maxProfit = change;
    }
    // if lost money move both pointers to next
    if (change < 0) {
      right++;
      left = right - 1;
    } else {
      right++;
    }
  }
  return maxProfit;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
