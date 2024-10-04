//Map in javascript
// in object every key is string but in map key can be of any type
// const map = new Map()
// const map = new Map([["name", "jyoti"], ["age", "23"], ["isDev", true]])

//add in map
// map.set("name", "jyoti")
// map.set("age", "23")
// map.set("hobbies", "singing")
// map.set("name", "jyoti")
// map.set("name", "jyoti")
// map.set(21, "age")

// console.log(map)

// //delete in map
// // map.delete(21)
// console.log(map)

// //check if key is present or not

// console.log(map.has("name"))

// //get value from map
// console.log(map.get("name"))

// // maps are iterable

// map.forEach((value, key) => {
//     console.log(key, value)
// })


//1  given a string s sort it in decreasing order  the  return the sorted string
//input s ="tree"
//output "eert"


// const frequencySort = (s) => {
//     let map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], map.get(s[i]) + 1 || 1)

//     }
//     let arr = [...map.entries()]
//     arr.sort((a, b) => b[1] - a[1])

//     let result = "";
//     for (let [char, freq] of arr) {
//         result += char.repeat(freq)
//     }




//     return result;

// }
// console.log(frequencySort("ttttreerrrr"))


//difference between map and object
// map  has better performance , mao is lighter than object , even if object is empty it has alot of keys already like inbuild once but map does not have that



//WeakMap in javacsript



//set in javascript
// it returs unique items
// const set = new Set([1, 2, 3, 12, 1, 23, 3, 4, 4, 5])
// set.add(29)
// set.delete(1)
// console.log(set.has(3))
// console.log(set)

// most impm question -> what is the differnce between map and objects
// const arr1 = [1, 2, 3, 4]
// const arr2 = [3, 4, 5, 6, 7]

// const getUnion = (arr1, arr2) => {
//     let set = new Set([...arr1, ...arr2])


//     return [...set]
// }

// console.log(getUnion(arr1, arr2))


// const getIntersection = (arr1, arr2) => {

//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {

//             if (arr1[i] == arr2[j]) {
//                 console.log("here")
//                 result.push(arr1[i])
//                 break;
//             }
//         }
//     }

//     return [...new Set(result)]

// }

// console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6, 7]))





// const myMap = new Map();

// myMap.set("name", "jyoti")
// myMap.set("age", 21)
// myMap.set("hobbies", ["singning", "dancing"])
// myMap.set("name",
//     "priya"
// )

// myMap.delete("age")

// for (let [key, value] of myMap) {
//     console.log(key, value, "key and value")
// }

// myMap.forEach((key, value) => {
//     console.log(key, value, "key value")
// })
// console.log(myMap, "myMap")

// for (let value of myMap.values()) {
//     console.log(value)
// }

// console.log(myMap.entries())

//1 Create a Map of student names and their scores. Add 5 students, update the score of one student, and remove one student. Traverse the Map to print all student names and scores.

// const printStudents = () => {
//     const myMap = new Map([

//         ["student 1", 25],
//         ["student 2", 20],
//         ["student 3", 24],
//         ["student 4", 22],
//         ["student 5", 24],
//     ])

//     myMap.delete("student 1")
//     myMap.set("student 2", 50)

//     for (let [key, value] of myMap) {
//         console.log(`${key}  ${value}`)
//     }
// }

// printStudents()

//2 Manipulating Objects in Map:

// Create a Map where keys are objects(e.g., { id: 1 }) and values are their details(e.g., name: "John", age: 30).Add, delete, and update objects in the Map.

// const ManipulatinObjects = () => {
//     const myMap = new Map([[{ id: 1 }, { age: 12, name: "jyoti" }], [
//         { id: 2 }, { name: "priya", age: "21" }
//     ]])

//     myMap.set({ id: 1 }, { age: 12, name: "kiya" })

//     console.log(myMap)

// }
// ManipulatinObjects()



// group anagram

const GroupAnagram = (strs) => {

    let myMap = new Map()

    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");

        if (!myMap.has(sortedStr)) {
            myMap.set(sortedStr, [str])
        } else {
            myMap.get(sortedStr).push(str)
        }
    }

    return Array.from(myMap.values())
}

console.log(GroupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]))