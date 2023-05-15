// 1 - secound largest number
// given an array arr of sie n print second largest distinct element from an array
// input: [12,35,1,10,34,1] ----> 34
// input :[10,5,10] ---> 5
// 1st approach
// new Set(arr) => creates an object of unique values of array in simplest way it removes all the repeating values and return the uniques value in an object
// Array.from method return an array from a object
// const secLargestArray = (nums) => {
//   const uniqueArr = Array.from(new Set(nums)); // o(n)
//   uniqueArr.sort((a, b) => b - a); // ologn
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// };
// console.log(secLargestArray([2, 4]));
// time complexity is ologn

// 2 approch

const secLargestArray = (nums) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secLargest = largest;
      largest = nums[i];
    } else if (nums[i] != largest && nums[i] > secLargest) {
      secLargest = nums[i];
    }
  }
  return secLargest;
};
console.log(secLargestArray([4, 5, 7, 8, 3, 9, 9]));
// o(n)
//0(1)
