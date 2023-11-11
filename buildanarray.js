/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = []
    let c = [];

    if (n == 0) {
        return result
    }

    for (let i = 1; i <= n; i++) {
        if (c.length >= target.length ||
            c === target) {
                break
        }
        result.push("Push")
        c.push(i)

        if (c[i-1] != target[i-1]) {
            console.log(`logging ${i}`)
            result.push("Pop")
            c.pop()
        }
            
        console.log(result)
        console.log(c)
    }
    return result
};

// buildArray([1,3], 3)
// buildArray([1,2,3], 3)
buildArray([1,2], 4)