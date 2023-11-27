/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let numToString = num.toString();
  if (numToString.length <= 1) {
    return num;
  }

  let sum = 0;
  while (numToString.length > 1) {
    for (let c of numToString) {
      sum += parseInt(c);
      console.log(sum);
    }
    if (sum.toString().length > 1) {
      numToString = sum.toString();
    } else {
      break;
    }
    sum = 0;
  }
  return sum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addDigits;
// @after-stub-for-debug-end
