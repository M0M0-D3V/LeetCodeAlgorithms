/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let potato = {}

    for (let num of nums) {
        if (potato[num]) {
            return true
        }
        potato[num] = true
    }
    return false
};
// @lc code=end

