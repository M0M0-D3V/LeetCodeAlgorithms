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

  // 2: find mid point
  let turtle = head;
  let rabbit = head;
  while (turtle.next && rabbit.next.next) {
    // rabbit runs 2x speed of turtle - will arrive in half time
    // turtle ends up being midpoint when rabbit finishes race
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }

  // 3: take right list and reverse
  let previous = null;
  let current = turtle.next;

  while (current) {
    // save next by storing to temp
    let temp = current.next;
    // point previous to next
    current.next = previous;
    // point current to previous
    previous = current;
    // point temp (next) to current
    current = temp;
  }
  turtle.next = null;

  // 4: merge alternately
  let first = head;
  let second = previous;

  while (first && second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }

  return head;
};

// @lc code=end
