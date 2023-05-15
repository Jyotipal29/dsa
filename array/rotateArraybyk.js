//2 - rotate array by k
// given an integer array nums rotate the array to the right by k stpes,
// where k is non-negative.

// input: nums =[1,2,3,4,5,6,7], k =3 ----> output: [5,6,7,1,2,3,4]
// input: nums =[-1,-100,3,99], k = 2 ----> output: [3,99,-1,-100]

// naive approach

// function rotateArray(nums, k) {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size;
//   }
//   const rotated = nums.splice(size - k, size);
//   console.log(rotated); // [5,6,7]
//   nums.unshift(...rotated); //[1,2,3,4].unshift([5,6,7]) ans =[5,6,7,1,2,3,4]
//   return nums;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// o(n)

//better approach

const rotateArray = (nums, k) => {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }

  // [1,2,3,4,5,6,7] =>[7,6,5,4,3,2,1] =>[5,6,7,4,3,2,1]=>[5,6,7,1,2,3,4]
  reverse(nums, 0, nums.length - 1); // o(n)
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums; // o(1) space complexity
};

const reverse = (nums, left, right) => {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));
