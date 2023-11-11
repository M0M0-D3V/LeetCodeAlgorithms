/*
 * @lc app=leetcode id=36 lang=java
 *
 * [36] Valid Sudoku
 */
import java.util.HashSet;
import java.util.Set;

// @lc code=start
class Solution {
    public boolean isValidSudoku(char[][] board) {
        // check horizontal
        boolean isValidX = checkHorizontal(board);
        // check vertical
        boolean isValidY = checkVertical(board);
        // check each 3 x 3 square
        int sqSize = 3;
        for (int row = 0; row < board.length; row += sqSize) {
            for (int col = 0; col < board[0].length; col += sqSize) {
                if (!checkSubBox(board, row, col, sqSize)) {
                    return false;
                }
            }
        }
        return isValidX && isValidY;
    }

    private boolean checkHorizontal(char[][] board) {
        for (int row = 0; row < board.length; row++) {
            // check each row for unique
            Set<Character> setChars = new HashSet<>();
            for (int col = 0; col < board[row].length; col++) {
                char currentChar = board[row][col];
                if (currentChar == '.') {
                    continue;
                }
                else if (setChars.contains(currentChar)) {
                    return false;
                }
                else {
                    setChars.add(currentChar);
                }
            }
        }
        return true;
    }

    private boolean checkVertical(char[][] board) {
        for (int col = 0; col < board.length; col++) {
            // check each col for unique
            Set<Character> setChars = new HashSet<>();
            for (int row = 0; row < board[col].length; row++) {
                char currentChar = board[row][col];
                if (currentChar == '.') {
                    continue;
                }
                else if (setChars.contains(currentChar)) {
                    return false;
                }
                else {
                    setChars.add(currentChar);
                }
            }
        }
        return true;
    }
    
    private boolean checkSubBox(char[][] board, int row, int col, int sqSize) {
        Set<Character> setChars = new HashSet<>();
        for (int i = row; i < row + sqSize; i++) {
            for (int j = col; j < col + sqSize; j++) {
                char currentChar = board[i][j];
                if (currentChar == '.') {
                    continue;
                }
                else if (setChars.contains(currentChar)) {
                    return false;
                }
                else {
                    setChars.add(currentChar);
                }
            }
        }
        return true;
    }
}
// @lc code=end

