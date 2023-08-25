// sum of two array elements

const sum = (arr1, arr2) => {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum[i] = arr1[i] + arr2[i];
  }

  return sum;
};

console.log(sum([1, 2, 3, 4], [1, 2, 3, 4]));
