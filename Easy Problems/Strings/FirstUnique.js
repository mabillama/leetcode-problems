/* First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const uniqSet = new Map();

  // iterate string adding a key-value pair stating how many times char was seen in the string
  for (let c of s) {
    if (!uniqSet.has(c)) {
      uniqSet.set(c, 1);
    } else {
      uniqSet.set(c, uniqSet.get(c) + 1);
    }
  }

  // Creating value and keys iterator. This could be done with a Map.prototype.forEach(), maybe?

  const itVal = uniqSet.values();
  const itKey = uniqSet.keys();

  // Iterating the Map to check if any value is equal to 1. If that is the case, it means that the character appear only once and the function should return the position of the original string in which it appears.
  for (let i of uniqSet) {
    let actualVal = itVal.next().value;
    let actualKey = itKey.next().value;

    if (actualVal === 1) {
      return s.indexOf(actualKey);
    }
  }

  return -1;
};

// firstUniqChar("loveleetcode");
// console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("leetcode"));

// This first attempt is not really good and could be refined to be more legible.
