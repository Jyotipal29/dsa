// create an empty array
// const arr = [];
// const arr2 = new Array()

// console.log(arr, arr2) // [][]

// access first and last element
// const arr = [1, 2, 3, 4, 5]

// console.log(arr[0]) // 1
// console.log(arr[arr.length - 1]) // 5

// remove the last element of the array
// const arr = [1, 2, 3, 4, 5, 6]

// arr.pop() // [1,2,4,5]
// it also returns the last element
// const newVal = arr.pop()
// console.log(newVal) // 6

// add element in end of the array
// arr.push(7)
// console.log(arr) //[1,2,3,4,5,6,7]
// add elemtn in start of the array

// arr.unshift(0)
// console.log(arr) // [0,1,2,3,4,5,6]

// remove from start of the array
// arr.shift()
// console.log(arr) // [2,3,4,5,6]

// question 1
// how do u check if an element exist in an array

// const checkElement = (arr, n) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return true;
//         }
//     }
//     return false
// }

// console.log(checkElement([1, 2, 3, 4, 5, 6], 6))

// question 2 how do you check if an elemtn exist in an array and return the index of it
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.includes())
// or

// const elementIndex = (arr, n) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return i
//         }
//     }

//     return -1
// }

// console.log(elementIndex(arr, 1))

// how to delete add and update element from a specific index
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//splice (start index, how many element to remove,how many elements to add)
// and slice changes the original array
// arr.splice(1, 3) // [1,5,6,7,8,9]
// console.log(arr)
// arr.splice(1, 3, 11, 11, 11) // [1,11,11,11,8,9]
// console.log(arr)

// arr.splice(1, 3, 9, 10, 11)
// console.log(arr) // [1,9,10,11,8,9]

// slice slice(start index, end index)
// it return the subarray and it does not change the original array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const newArr = arr.slice(1, 4) // 4-1 => 3 elements
// console.log(arr)
// console.log(newArr)

// pass by value and pass by reference
//pass by value -> if one value changes it does not effect the original one
// pass by refernce -> if one value changes it does effect the original becouse both the variable is pointing to the same array


// shallow copy which is pass by refernce

// const arr = [1, 2, 3, 4, 5, 6]
// const arrb = arr
// console.log(arr, "arr")
// arr.splice(2, 2, 9, 9, 9, 9, 9)

// console.log(arrb, "arrb")


// deep copy which is pass by value

// const arr = [1, 2, 3, 4, 5, 6]

// const arrC = [...arr]

// arr.splice(1, 2, 9, 9, 9)

// console.log(arr)
// console.log(arrC)

// question 3 how can u check if two arrays are equal

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 6, 5]

const isEqual = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }

    }



}

// every mean every elements will follow the condition 
// some mean at leat one element will follow the condition


console.log(isEqual(arr1, arr2))