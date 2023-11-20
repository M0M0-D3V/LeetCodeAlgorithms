/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 1: check head if empty or no next
  if (!head || !head.next) {
    return head;
  }
  let current = head;
  let turtle = head;
  let rabbit = head;

  // 2: find mid point
  while (turtle.next && rabbit.next.next) {
    // rabbit runs 2x speed of turtle - will arrive in half time
    // turtle ends up being midpoint when rabbit finishes race
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }

  // 3: separate link lists

  // 4: take right list and reverse

  // 5:
  return current;
};

// @lc code=end
