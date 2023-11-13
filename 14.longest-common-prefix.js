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
  let firstWord = strs[0].split("");
  let index = 0;
  for (let str of strs) {
    index++;
  }
  //   let str = strs[i];
  //   let char = str[i];
  //   console.log(str);
  //   console.log(char);
  //   console.log(firstWord[i]);
  //   if (char == firstWord[i] && !check.includes(char)) {
  //     check.push(char);
  //   } else if (char != firstWord[i]) {
  //     check.pop();
  //   }
  // }
  // return check.join("");
};
// @lc code=end
