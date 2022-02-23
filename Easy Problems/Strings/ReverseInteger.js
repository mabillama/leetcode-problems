/* Reverse Integer

https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1 
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x > 2147483648 || x < -2147483641) {
    return 0;
  }
  let text = x.toString();
  let textArr = text.split("");

  textArr.reverse();
  if (textArr[textArr.length - 1] === "-") {
    textArr.unshift(textArr[textArr.length - 1]);
    textArr.pop();
  }
  text = textArr.join("");

  const reversed = parseInt(text);
  if (reversed > 2147483648 || reversed < -2147483641) {
    return 0;
  }

  return parseInt(text);
};

console.log(reverse(1534236469));
reverse(9646324351);

// Should read the problem better! Totally dismissed the fact that reversing shuold not go beyond the limits
