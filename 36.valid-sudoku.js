/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let len = board.length;
  // check horizontal
  for (let i = 0; i < len; i++) {
    let rowNums = [];
    for (let j = 0; j < len; j++) {
      if (board[i][j] != ".") {
        rowNums.push(board[i][j]);
      }
    }
    if (!isUniqueDigits(rowNums)) {
      return false;
    }
  }
  // check vertical
  for (let i = 0; i < len; i++) {
    let colNums = [];
    for (j = 0; j < len; j++) {
      if (board[j][i] != ".") {
        colNums.push(board[j][i]);
      }
    }
    if (!isUniqueDigits(colNums)) {
      return false;
    }
  }
  // check subsquare
  let row = 0;
  let col = 0;
  let count = 0;
  let squareNums = [];
  for (let i = row; i < row + 3; i++) {
    for (let j = col; i < col + 3; j++) {
      squareNums.push(board[row][col]);
    }
  }
  if (!isUniqueDigits(squareNums)) {
    return false;
  }
  count++;
  if (count < 3) {
    row = 0;
    col += 3;
  }
  if (count < 6) {
    row = 3;
    col += 3;
  }
};

const isUniqueDigits = (digits) => {
  let seen = {};

  for (let digit of digits) {
    if (seen.hasOwnProperty(digit)) {
      return false;
    } else {
      seen[digit] = 1;
    }
  }
  return true;
};
// @lc code=end
