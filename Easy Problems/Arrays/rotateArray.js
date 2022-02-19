/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* // BAD CODE
var rotate = function (nums, k) {
  const tempArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (i - k < 0) {
      tempArray.push(nums[nums.length + i - k]);
    } else {
      tempArray.push(nums[i - k]);
    }
  }
  nums = tempArray;
  console.log(nums);
}; */

/*var rotate = function (nums, k) {
  const rotateOne = function (nums) {
    let f = nums[nums.length - 1];
    let l = nums[0];
    nums[0] = f;

    for (let i = 1; i < nums.length; i++) {
      f = nums[i];
      nums[i] = l;
      l = f;
    }
  };

  for (let j = 0; j < k; j++) {
    rotateOne(nums);
  }

  console.log(`Final result ${nums}`);
};
*/

// Maybe an array copy to then manipulate
/*
var rotate = function (nums, k) {
  // temp clone of nums array
  const numsClone = [...nums];

  if (k > nums.length) {
    k = k % nums.length;
  }

  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (i - k < 0) {
        nums[i] = numsClone[nums.length + i - k];
        console.log(`${nums.length + i - k}, i: ${i}, k: ${k}`);
      } else {
        nums[i] = numsClone[i - k];
        // console.log(nums);
      }
    }
  }
  console.log(nums);
};
*/

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();
  nums.splice(0, k, ...nums.slice(0, k).reverse());
  nums.splice(k, nums.length, ...nums.slice(k, nums.length).reverse());
};

rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5], 3);
rotate([-1, -100, 3, 99], 2);
rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([1, 2, 3, 4, 5, 6, 7], 2);
rotate([1, 2, 3, 4, 5, 6, 7], 1);
rotate([1, 2, 3], 2);
rotate([-1], 2);
rotate([1, 2], 3); // Expected:[2,1]
