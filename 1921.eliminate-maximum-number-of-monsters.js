/*
 * @lc app=leetcode id=1921 lang=javascript
 *
 * [1921] Eliminate Maximum Number of Monsters
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let count = 0
    let idx = 0

    do {
        // kill if you can
        count++
        idx++

        // after an hour, things move
        for (let i = idx; i < dist.length; i++) {
            dist[i] -= speed[i]
            // check if dead
            if (dist[i] <= 0) {
                return count
            }
        }
    } while (dist[idx] < dist.length && dist[idx] > 0)

    return count
};
// @lc code=end

