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

  // iterate string
  for (let c of s) {
    if (!uniqSet.has(c)) {
      uniqSet.set(c, 1);
    } else {
      uniqSet.set(c, uniqSet.get(c) + 1);
    }
  }

  console.log(uniqSet);
  const itVal = uniqSet.values();
  const itKey = uniqSet.keys();

  for (let i of uniqSet) {
    let actualVal = itVal.next().value;
    let actualKey = itKey.next().value;

    console.log(i);
    console.log(actualVal);
    console.log(actualKey);
    if (actualVal === 1) {
      return s.indexOf(actualKey);
    }
    // console.log(actualKey);
  }

  return -1;

  // while finding doubles continue
  // if no double returns position
  // if ended -1
};

// firstUniqChar("loveleetcode");
// console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("aadadaad"));
