/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charMap = new Map();

  if (s.length !== t.length) return false;

  for (let c of s) {
    if (!charMap.has(c)) {
      charMap.set(c, 1);
    } else {
      charMap.set(c, charMap.get(c) + 1);
    }
  }
  console.log(charMap);

  for (let c of t) {
    if (!charMap.has(c) || charMap.get(c) === 0) {
      return false;
    } else {
      charMap.set(c, charMap.get(c) - 1);
    }
  }

  console.log(charMap);
  console.log(`\n`);

  // if t is an anagram of s
  return true;
};

// isAnagram("anagram", "nagaram");
// console.log(isAnagram("anagram", "nagaram"));
// isAnagram("rat", "car");
// console.log(isAnagram("rat", "car"));
// isAnagram("a gentleman", "elegant man");
// console.log(isAnagram("a gentleman", "elegant man"));
isAnagram("ab", "a");
console.log(isAnagram("ab", "a"));
