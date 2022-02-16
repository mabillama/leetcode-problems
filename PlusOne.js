/*

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

Plus One *********************************************

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1: *********************************************
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2: *********************************************
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3: *********************************************
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Reverse array and increment first element
  digits.reverse();
  digits[0]++;

  // If any element of the array is bigger than 9, then add one to the next item
  digits.forEach((el, index) => {
    if (el > 9) {
      digits[index] = 0;
      digits[index + 1] ? digits[index + 1]++ : (digits[index + 1] = 1);
    }
  });

  // Reverse once again
  digits.reverse();

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));

/* 
Leetcode submission details
https://leetcode.com/submissions/detail/642720795/?from=explore&item_id=559

*/
