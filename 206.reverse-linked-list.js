/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next; // Store the next node temporarily
    current.next = previous; // Reverse the pointer

    // Move previous and current one step forward
    previous = current;
    current = nextTemp;
  }

  // 'previous' will point to the new head of the reversed list
  return previous;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end
