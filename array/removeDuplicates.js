// remove the duplicates in an array

const removeDups = (arr) => {
  let newArr = [];
  for (let el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }

  return newArr;
};

console.log(removeDups([1, 2, 3, 4, 4, 5, 5]));
