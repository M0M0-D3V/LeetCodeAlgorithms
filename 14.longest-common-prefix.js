/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) {
    return strs[0];
  }
  if (strs[0][0] !== strs[1][0]) {
    return "";
  }

  // 0. create string variable
  let temp = "";
  // 1. loop all strings
  for (let i = 0; i < strs[0].length; i++) {
    // 2. check first char of first string with next strings
    let char = strs[0][i];
    console.log(`char is: ${char}`);
    // 3. if all strings have it, add char to string variable
    for (let j = 0; j < strs.length; j++) {
      if (char != strs[j][i]) {
        return temp;
      }
    }
    temp += char;
  }
  return temp;
};
// @lc code=end
