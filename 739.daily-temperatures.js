/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // store answers
  let numDaysTilWarmer = [];

  // bag of holdings
  let bag = [];

  for (let day = 0; day < temperatures.length; day++) {
    let placeholder = day;
    let temp = temperatures[day];
    let nextTemp = temperatures[day + 1];
    // keep adding to bag if next day's temperature is lower than placeholder
    while (nextTemp < temperatures[placeholder] && day < temperatures.length) {
      bag.push(nextTemp);
      day++;
      temp = temperatures[day];
      nextTemp = temperatures[day + 1];
    }
    // for each temperature, add to bag if next is higher
    if (temperatures[placeholder] < nextTemp) {
      bag.push(nextTemp);
    } else {
      bag.pop();
    }
    numDaysTilWarmer.push(bag.length);
    bag = [];
    day = placeholder;
  }
  return numDaysTilWarmer;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end
