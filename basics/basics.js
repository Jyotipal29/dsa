//1 sum of all number from 0 - n

// const sumOfNumber = (n) => {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// console.log(sumOfNumber(15));

//2 finding the sum of digits

// const findTheSum = (num) => {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = num / 10;
//   }
//   return sum;
// };

// console.log(findTheSum(123));

// console.log("jyoti");

//3 count the number of degits of a number

// let num = 1;
// let counter = 0;
// while (num > 0) {
//   num = Math.floor(num / 10);
//   ++counter;
// }
// console.log(counter);

// 4 palindrome number
// 131 is palindrom
// 11211 is a palindrom

// we can reverse the number and check if the original and reverseed valus is same or not if same then true else false
// const isPalindrom = (num) => {
//   let originalNum = num;
//   let reverseNum = 0;
//   while (num > 0) {
//     let newNum = num % 10;
//     reverseNum = reverseNum * 10 + newNum;
//     num = Math.floor(num / 10);
//   }
//   return originalNum === reverseNum;
// };

// let num = 12123;
// if (isPalindrom(num)) {
//   console.log("it is a palindrom");
// } else {
//   console.log("it is not a palindrom");
// }

// function isPalindrome(number) {
//   const originalNumber = number;
//   let reversedNumber = 0;

//   while (number > 0) {
//     const digit = number % 10;
//     reversedNumber = reversedNumber * 10 + digit;
//     number = Math.floor(number / 10);
//   }

//   return originalNumber === reversedNumber;
// }

// const num = 121;
// if (isPalindrome(num)) {
//   console.log(num + " is a palindrome.");
// } else {
//   console.log(num + " is not a palindrome.");
// }

// fibnocci series

const fibnocci = (n) => {
  let prev = 0;
  let curr = 1;
  let fib = 0;
  for (let i = 2; i < n; i++) {
    fib = prev + curr;
    console.log(fib);
    prev = curr;
    curr = fib;
  }
  //   return fib;
};

console.log(fibnocci(10));
