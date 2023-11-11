/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    return x.split('').every((char, i) => {
        return char === x[x.length - i - 1]
    })
};

console.log(isPalindrome(-121))