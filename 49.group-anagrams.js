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
    let letterHash = {};
    // map each letter count
    for (let i = 0; i < str.length; i++) {
      // check each letter in the letterHash
      if (letterHash.hasOwnProperty(str[i])) {
        // add 1 if exist
        letterHash[str[i]]++;
      } else {
        // if not found start count at 1
        letterHash[str[i]] = 1;
      }
    }
    // check of map is empty
    if (countMap.size === 0) {
      // store first map and answer array
      countMap.set(letterHash, [str]);
      continue;
    }
    // check if map contains hash already
    let quitFlag = false;
    let i = 0;
    for (let [key, value] of countMap) {
      i++;
      // if there's no match
      if (deepEqual(key, letterHash)) {
        // add hash to map
        // push str to letterHash list
        let ansArr = countMap.get(key);
        ansArr.push(str);
        countMap.set(key, ansArr);
        quitFlag = true;
      }
      if (i === countMap.size && !quitFlag) {
        countMap.set(letterHash, [str]);
        quitFlag = true;
      }
      if (quitFlag) {
        break;
      } else {
        continue;
      }
    }
  }
  return Array.from(countMap.values());
};

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end
