/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let runner1 = list1;
  let runner2 = list2;

  while (runner1.next !== null) {
    if (runner1.val < runner2.val) {
      runner1 = runner1.next;
    } else {
      // save next and drop it
      let temp2 = runner2.next;
      runner2.next = null;
    }
  }
  return list1;
};
// @lc code=end
