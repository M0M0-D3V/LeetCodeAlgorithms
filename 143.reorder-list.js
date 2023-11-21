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
  if (!head || !head.next || !head.next.next) {
    return head;
  }
  // 0. save head to variable current
  let current = head;
  // 1. find last and save it to variable lastNode
  let lastNode = findLast(current);
  console.log(lastNode);
  let nextLastNode = findLast(current);
  console.log(nextLastNode);
  // 2. find previous to last and empty .next

  // 3. save current.next to variable tempN
  // 4. assign current.next to be lastNode
  // 5. move current to be current.next.next if exists
  // 6. assign lastNode.next to be tempN
  return head;
};

var findLast = function (head) {
  let runner = head;
  while (runner.next) {
    if (runner.next.next == null) {
      let node = runner.next;
      runner = null;
      return node;
    }
    runner = runner.next;
  }
};

/* original
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
*/

// @lc code=end
