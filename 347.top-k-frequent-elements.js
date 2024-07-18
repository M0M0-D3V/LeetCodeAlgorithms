/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // use hash table to store a running count
  let countMap = new Map();
  let ans = [];
  // loop through array nums to check each num and count to hash
  for (let num of nums) {
    // check if num exists in countMap
    if (countMap.has(num)) {
      // add 1 to it if exists
      countMap.set(num, countMap.get(num) + 1);
    } else {
      // start 1 count if not exist
      countMap.set(num, 1);
    }
  }

  // loop k times through countMap
  for (let i = 0; i < k; i++) {
    // loop through countMap
    let max = 0;
    countMap.forEach((value, key) => {
      tempKey = key;
      if (max < value) {
        // find the biggest count
        max = value;
        ans[i] = key;
      }
      // each time biggest is found, add to answer array
    });
    //replace with 0
    countMap.set(ans[i], 0);
  }
  return ans;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end
