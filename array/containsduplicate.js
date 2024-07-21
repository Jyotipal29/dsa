// find if the aray contains duplicate

// const containsDups = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(containsDups([1, 2, 3, 4, 5]));



//revise

const containsDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }

  return false;
}


console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 6]))
