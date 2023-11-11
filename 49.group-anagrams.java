/*
 * @lc app=leetcode id=49 lang=java
 *
 * [49] Group Anagrams
 */
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
;

// @lc code=start
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> output = new ArrayList<>();
        List<Integer> usedIndexes = new ArrayList<>();
        List<String> charArrayList = new ArrayList<>();

        // convert strs to charArrays and build charArrayList
        for (String str : strs) {
            char[] strToCharArr = str.toCharArray();
            Arrays.sort(strToCharArr);
            String backToStr = new String(strToCharArr);
            charArrayList.add(backToStr);
        }

        // start from first sorted str, loop charArrayList
        for (int index = 0; index < charArrayList.size(); index++) {
            // check if str not already used
            if (usedIndexes.contains(index)) {
                continue;
            }
            String str = strs[index];
            List<String> currentList = new ArrayList<>();
            currentList.add(str);
            usedIndexes.add(index);

            // inner loop to compare other sorted str
            for (int next = index + 1; next < charArrayList.size(); next++) {
                String nextStr = strs[next];
                String firstWord = charArrayList.get(index);
                String nextWord = charArrayList.get(next);
                // compare with first nextStr
                if (firstWord.equals(nextWord) || nextStr == null) {
                    // if matches, add to currentList
                    currentList.add(nextStr);
                    usedIndexes.add(next);
                }
            }
            output.add(currentList);
        }
        return output;
    }
}
// @lc code=end

