// 3 - remove duplictaes from sorted array
// given an interger array nums sorted in non decreasing order remove
// the duplicates in-place such that each unique element appears
//only once. the relative order of the elements should be kept
// the same. then return the number of unique elements in nums.

// in place -> dont create new array
// input :[1,1,2] --->  output: 2  ->[1,2]
// input :[0,0,1,1,1,2,2,3,3,4] --->  output: 5  ->[0,1,2,3,4]

//so this wont work
// const removeDuplictaes = (nums) => {
//   const newArr = Array.from(new Set(nums));
//   return newArr.length;
// };

// naive \
// const removeDuplictaes = (nums) => {
//   for (let i = 0; i < nums.length; i++) { // o(n)
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };
// time -o(n)
//space - o(1)
// console.log(removeDuplictaes([0, 0, 1, 1, 2]));

// better approach

const removeDuplictaes = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// o(n)
console.log(removeDuplictaes([0, 0, 1, 1, 2]));
