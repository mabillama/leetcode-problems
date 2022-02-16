/*

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1: ****************************
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2: ****************************
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

Constraints: ****************************
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

Follow up: ****************************
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let results = [];

  // Create a map with the elements present on the first array
  let mappedSet = new Map();
  nums1.forEach((el) => {
    !mappedSet.has(el)
      ? mappedSet.set(el, 1)
      : mappedSet.set(el, mappedSet.get(el) + 1);
  });

  // Check the other array against the map and create and populate the results array to be returned afterwards

  nums2.forEach((el) => {
    if (mappedSet.has(el) && mappedSet.get(el) > 0) {
      results.push(el);
      mappedSet.set(el, mappedSet.get(el) - 1);
    }
  });

  return results;
};

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2)); // Output: [4,9]
nums1 = [1, 2, 2, 1];
nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // Output: [2,2]

/*
Leetcode submission details
https://leetcode.com/submissions/detail/642708818/?from=explore&item_id=674


*/
