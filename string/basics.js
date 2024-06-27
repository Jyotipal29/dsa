// let name = "jyoti"
// length of the string

// console.log(name.length) // 5

//access string element
// chartAt()  // get the value of that perticular index
// console.log(name.charAt(2)) // o
// console.log(name[2]) // o

// find if any element present in the string or not
// console.log(name.includes("o"))
// console.log(name.indexOf("o"))

// const str = "you should definetly hire jyoti"
// replace any word with another word
// console.log(str.replace("definetly", "for sure"))

// substring

// console.log(str.substring(2, 5)) // u s

// console.log(str.slice(3, 10)) // should

// split
// console.log(str.split(" ")) // [ 'you', 'should', 'definetly', 'hire', 'jyoti' ]
// console.log(str.split(" ").join("/")) // you/should/definetly/hire/jyoti

// question 1  given two string needle and haystack return the index of the fisrt occurrence of needle in haystack or -1 if needle is not part of haystack


// const isPresent = (needle = "sad", haystack = "sadbutsad") => {

//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[i]) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(isPresent())
// question 2 reverse a string

const reverseString = (str = "jyoti") => {

    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString())