//q rverse an array

const reverse = (arr) => {
  let a = 0;
  let b = arr.length - 1;
  let temp = 0;

  while (b > a) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    a++;
    b--;
  }
  return arr;
};

console.log(reverse([2, 3, 4, 5]));
