//q find if the element is present in the array or not
const findElement = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return true;
    }
  }
  return false;
};

console.log(findElement([1, 2, 3, 4], 4));
