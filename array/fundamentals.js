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


// ****//

// create an empty array

// const arr = []
// const arr = [1, 2, 3, 5,"jyoti",{name:"pal"},[{name:"jiya"}]]
// console.log(arr, arr2)
// access an array elemtn

// console.log(arr2[5])
// console.log(arr2[4])

//array length

// console.log(arr2.length)

// last element of an array

// console.log(arr2.length - 1);
// to access any element in an array is 0(n)

// to remove last element
// pop not only delete the last element it also returns the last element
// arr.pop()
// aad in  an array to the last

// arr.push(5)

// add in the first place
// arr.unshift(2)

// delete starting element in an array
// arr.shift()

//1 find element



// const findElement = (arr,target) => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === target)
//             return arr[i];
//     }
//     return false;
// }

// console.log(findElement([1, 2, 3, 4, 5], 8));
// let arr =[1,2,3,4,5,6,7,8]
// console.log(arr.includes(7))
// console.log(arr);
    //array.some checks weather at least one element 
    //in the array satisfy the  given the call abck fuctiosn condition
// array.every method tests wwather all element in the array passes the callback test 

// array.includes checks if the array if the element is present in thr array or not


// indexOf
// console.log(arr.indexOf(3))

// splice 
// in spalice im saying arr.splice(start index, number of element)
// here im saying 1st index se 2 element remove karo
// arr.splice(1, 2)

// here 2nd index se 3 element hato so output will come as [ 1, 2, 6, 7, 8 ]
// arr.splice(2,3)

// arr.splice(2, 0, 11, 12, 13)
// here what im doing is from 2nd index dont delete anything instead add 11,12,13  so output will come as [ 1, 2, 11, 12, 13, 3, 4,  5,  6,  7, 8]

// let arr =[1,2,3,4,5,6,7,8]

// arr.splice(2, 3, 0, 0, 0, 0)
// here what im doing is fron 2nd index delete 3 elemtns and in that place add 0,0,0,0 so output will come as  [1, 2, 0, 0, 0,0, 6, 7, 8]

// let arr =[1,2,3,4,5,6,7,8]



// what is the difference between splice and slice
// slice does not modify the original array
// it returns a new array with the removed value
// let newArr = arr.slice(1, 3)

// splice
// original array is modifed
// let newArr = arr.splice(1,3)
// console.log(newArr) // [ 2, 3, 4 ]
// console.log(arr); // [ 1, 5, 6, 7, 8 ]

// shallow copy
// in  shallow copy  original arr changes if i change the arr2 becouse its pass by refernce and both the arr rference to the same in array in the memory
// const arr2 = arr;
// arr2.splice(1,2)
// console.log(arr,"this is arr ")
// console.log(arr2, "this is arr2")

// deep copy
//1 method spread operator
// let arr2 = [...arr]

//2  method Array.from(arr)
//array.from method creates a new array from array or objects
// let arr2 = Array.from(arr)
// arr2.splice(1,3)
// console.log(arr, "this is arr ");
// console.log(arr2, "this is arr2");

// 4 method arr.concat()
//when i concat when dont give any parameter it returns a deep copy of an array
// let arr2  = arr.concat()
// arr2.splice(1, 3);
// console.log(arr, "this is arr ");
// console.log(arr2, "this is arr2");

//how to add two arrays

//1 spread operator

// let arr =[1,2,3]
// let arr2 = [4, 5, 6]

// let newArr = [...arr, ...arr2]
// console.log(newArr)

//2 concat method
// let newArr = arr.concat(arr2)
// console.log(newArr);

// q check if two arrays are equals

// const isEqual = (arr,arr2) => {
//     if (arr.length !== arr2.length) {
//         return false
//     }

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true

// }

// another way to do this

// const isEqual = (arr, arr2) => {
//     return arr.length === arr2.length && arr.every((item) =>arr[item] === arr2[item])
// }
// console.log(isEqual([1,2,3,4],[1,2,3,4]))

// sort the arr 

// const arr = [1, 2, 3, 5];
// arr.sort((a,b) => b-a);
// console.log(arr)

// rverse an arrya 

// const arr = [1, 2, 3, 4];
// arr.reverse()
// console.log(arr)

// rverse an array 

// const reverseArr = (arr) => {
//     arr.sort()
//     let start = 0;
//     let end = arr.length - 1;
//     while (end > start) { 
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--
//     }
//     return arr;
// }
// console.log(reverseArr([1,21,32,4]))


// summ of array elemenst 

// const sum = (arr) => {
//     return arr.reduce((acc,curVal) => (acc + curVal))
// }

// const sum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }


// console.log(sum([1,2,3,4,5]))


// find max and min of an array 

// const minMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < min) {
//             min = arr[i]
//         }

//         if (arr[i] > max) {
//             max = arr[i];
//         }
     
//     }

//     return {
//         min, max
//     }
// }

// console.log(minMax([1,2,3,4]))

// reverse an array 

// const reverse = (arr) => {

//     let a = 0;
//     let b = arr.length - 1;
//     let temp = 0;

//     while (b > a) {
//         temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//         a++;
//         b--;
//     }

//     return arr;
    
// }


// constinas duplicates
// const dups = (arr) => {
//     arr.sort();
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === arr[i + 1]) {
//             return true;
//         }
//     }
//     return false
// }


// remove the dups
// take an empty array now check if an elemtn exixt there if exist then move to next if does not then add that element 

// const removeDups = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }


// console.log(removeDups([1, 2, 2, 3, 3, 4, 5, 6, 6]));

// rotate array 


// const inter = (arr1, arr2) => {
//     let res = [];

//     for (let ele of arr1) {
//         if (arr2.includes(ele)) {
//             res.push(ele)
//         }
//     }

//     return res;
// }

// console.log(inter([1,2,3,11,12],[3,4,5,12]))


// const add = (arr1, arr2) => {
//     let sum = [];
//     for (let i = 0; i < arr1.length; i++){
//         sum[i] = arr1[i] + arr2[i];
//     }
//     return sum;
// }

// console.log(add([1,2,3,4],[1,2,3,4]))

//array reversal [1,2,3,4,5] => [5,4,3,2,1] dont use new array 

// const rev = (arr) => {
//     let a = 0;
//     let b = arr.length - 1;
//     let temp = 0;
//     while (b > a) {
//         temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//         a++;
//         b--;
//     }
//     return arr;
// }

// console.log(rev([1,2,3,4]))

//2 Array Filtering
// Input: ["apple", "banana", "grape", "kiwi"] (Minimum length: 5)
// Output: ["banana", "grape"]

// const fill = (arr) => {
//     return arr.filter((item) => item.length > 3)
// }

// console.log(fill(["jyoti","palxx"]))

// array sorting 

// const sort = (arr) => {
    
// }

