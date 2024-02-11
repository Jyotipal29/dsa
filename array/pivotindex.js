// var pivotIndex = function (nums) {
//   let leftSum = 0;
//   let rightSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     rightSum += nums[i];
//   }
//   if (rightSum === leftSum) {
//     return 0;
//   }
//   for (let pivot = 1; pivot < nums.length; pivot++) {
//     leftSum += nums[pivot - 1];
//     rightSum -= nums[pivot];

//     if (leftSum === rightSum) {
//       return pivot;
//     }
//   }
//   return -1;
// };

var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }
  if (rightSum === leftSum) {
    return 0;
  }
  for (let pivot = 1; pivot < nums.length; pivot++) {
    leftSum += nums[pivot - 1];
    rightSum -= nums[pivot];

    if (leftSum === rightSum) {
      return pivot;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
