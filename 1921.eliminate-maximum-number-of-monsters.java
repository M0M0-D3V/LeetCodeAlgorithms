/*
 * @lc app=leetcode id=1921 lang=java
 *
 * [1921] Eliminate Maximum Number of Monsters
 */

// @lc code=start
class Solution {
    public int eliminateMaximum(int[] dist, int[] speed) {
        int killCount = 0;
        int idx = 0;
        
        do {
            killCount++;
            idx++;  // next mob index

            // after 1 min move the mobs closer by its speed
            for (int i = idx; i < dist.length; i++) {
                dist[i] -= speed[i];
                if (dist[i] <= 0) {
                    return killCount;
                }
            }
        
        } while (idx < dist.length && dist[idx] > 0);
        // continue loop if dist has more mobs and next mob distance is not 0

        return killCount;
    }
}
// @lc code=end

