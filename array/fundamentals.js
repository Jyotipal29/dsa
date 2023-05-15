// Array - declaration
//1
// let arr = new Array();

//2
// let arr = [];

//how to access an array
// let arr = ["apple", "banana", "cherry"];
// console.log(arr[2]);

// array can store any data type it can store object funcions

// let person = {
//   name: "jyoti",
//   surname: "pal",
// };

// let array = ["p1", "p2", "p3", person];
// console.log(array);
// console.log(array[3]);
// console.log(array[3].name);

// Arrays - Add and Remove elements
// let arr = ["apple", "banana", "cherry"];

//1 push - adds at the last in the array
// arr.push("mango");
//2 pop - removes the last added in the array
// arr.pop();

//3 unshift add top of the array
// arr.unshift("orange");
// 4. shift removes from top of the array
// arr.shift();
// console.log(arr);

// looping in array

// for

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// whie

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

//Inbuilt loop methods

// const num = [1, 2, 3, 4];
// const newNum = numbers.map((item, index, array) => {
//   return item + 5;
// });
// console.log(newNum);

// filter
//reduce

//some - some is like filter but some return true or false
// const res = num.some((item) => item === 4);
// const res2 = num.some((item) => item > 2);
// console.log(res2);

// every - check if every items in array sutify the condition and return true or false based on the condition

// const res = num.every((i) => i > 5);
// console.log(res);

// find - return the value of the first element in the array where predicate is ture , and undefined otherwise

// const res = num.find((i) => i > 2);
// it return 3 coz it return the first elemtn
// console.log(res);

// Spread and rest operators
// const nums = [1, 2, 3];
// const nums2 = [4, 5, 6, 7];

// const final = [...nums, ...nums2]; // spread operator
// console.log(final);

// function sum(...num) {
//   return num;
// }
// function sum(nums, nums2, str) {
//   return [...nums, ...nums2, str];
// }
// console.log(sum(nums, nums2, "hello"));

// more Array method
// 1 concat - combines two or more arrays . this method returns a new array wihtout modifying any existing arrays
// const num = [1, 2, 3, 4];
// const nums2 = [4, 5, 6, 7];
// const nums3 = [10, 20, "jyoti", "samosa"];
// const newArr = nums.concat(nums2, nums3);
// console.log(newArr);

//2 slice -returns a copy of a section of an array it takes a start and and end a negative index can be used to indicate an offset from the end of the array. for example -2 refers to the second to last elemt of the array
// console.log(num); //[1,2,3,4]
// const newArr = num.slice(0, 2); //[1,2] it takes till 0 to n-1 here n is 2
// here i gave 0 2 so it will return 0th indexed and 1st indexed

// const newArr = num.slice(-1); // it returns the last element of the array which is 4 here
// const newArr = num.slice(-2); // it return last two elements of the array [3,4]
// console.log(newArr);

// splice
// splice does not return new array but it modifies the actuall array
// const num = [1, 2, 3, 4, 7, 5, 6];
// console.log(num);
// num.splice(1, 3, "jyoti"); // first args is the starting index sec args ishow many elements to remove third args is what to insert in there
// console.log(num);
// so if u try to make it in new array it will return the elements which u are removing

// Fill
// const num = [1, 2, 3, 4, 7, 5, 6];
// num.fill(0, 3);
// 0- replace value with zero
// 3 - start from the 3rd index

// console.log(num);

//findIndex
// const num = [1, 2, 3, 4, 7, 5, 6];
// const newNum = num.findIndex((item) => item === 6);

// console.log(newNum);

// falt
// const num = [1, [2, 3], [4, [7, 5], 6]]; // =>[1,2,3,4,7,5,6]
// const newArr = num.flat(2);
// so 2 here will falt the 2nd nested layer [7,5]
// console.log(newArr);

// reverse

// const num = [1, 2, 3, 4, 5, 6, 7];
// console.log(num);
// const newNum = num.reverse();
// console.log(newNum);

// sort
// const num = [2, 5, 7, 3, 5, 9];
// const sorted = num.sort();
// console.log(sorted);
