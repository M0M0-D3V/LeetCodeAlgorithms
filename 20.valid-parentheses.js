/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // valid lengths are even
  if (s.length % 2 !== 0) {
    return false;
  }

  // save key-value pair
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // bag of holdings
  let bag = [];

  for (let paren of s) {
    // check and add to bag if open
    if (paren == "(" || paren == "[" || paren == "{") {
      bag.push(paren);
    } else {
      // If the stack is empty or the top of the stack doesn't match the current closing parenthesis
      if (bag.length === 0 || pairs[bag.pop()] != paren) {
        return false;
      }
    }
  }
  return bag.length === 0;
};

// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
