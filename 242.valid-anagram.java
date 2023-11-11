/*
 * @lc app=leetcode id=242 lang=java
 *
 * [242] Valid Anagram
 */
import java.util.ArrayList;
import java.util.List;
 
// @lc code=start
class Solution {
    public boolean isAnagram(String s, String t) {
        // check if both are same length
        if (s.length() != t.length()) {
            return false;
        }

        // convert s to List to use the remove by index feature
        List<Character> charList = new ArrayList<>();
        char[] charArray = s.toCharArray();

        for (char c : charArray) {
            charList.add(c);
        }

        // change to t
        charArray = t.toCharArray();

        // loop through t and remove each found
        for (char c : charArray) {
            if (charList.contains(c)) {
                charList.remove(Character.valueOf(c));
            }
        }
        
        // size sould be 0 if they are anagrams
        return charList.isEmpty();
    }
}
// @lc code=end

