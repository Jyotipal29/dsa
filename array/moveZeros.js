// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const removeZeros = (nums) => {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      j++;
    }
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    }
  }
  return nums;
};
// o(n);
//o(1)

console.log(removeZeros([0, 1, 0, 3, 12]));
