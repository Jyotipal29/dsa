// find if two array are equal or not
const equal = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
};

console.log(equal([1, 2, 3, 4], [1, 2, 3, 4]));
