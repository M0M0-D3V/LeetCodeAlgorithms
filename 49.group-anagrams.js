/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let countMap = new Map();
  // loop each string in array of strings
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    // check of map is empty
    if (countMap.size === 0) {
      // store first map and answer array
      countMap.set(sorted, [str]);
      continue;
    }
    // check if map contains hash already
    let i = 0;
    for (let [key, value] of countMap) {
      i++;
      // if there's no match
      if (key === sorted) {
        // add hash to map
        // push str to list
        let ansArr = countMap.get(key);
        ansArr.push(str);
        countMap.set(key, ansArr);
        break;
      }
      if (i === countMap.size) {
        countMap.set(sorted, [str]);
        break;
      }
      continue;
    }
  }
  return Array.from(countMap.values());
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end
