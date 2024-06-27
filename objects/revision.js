// objects in js

const person = {
    name: "jyoti",
    age: 23,
    isDev: true,
    skills: ["reactjs,javascript,nextjs,redux,tailwind css"],
    code: function () {
        return "love coding"
    }

}


// how to access
// console.log(person.name)
// console.log(person["name"])
// console.log(person.code())

// how to add delete and update

// how to find key in the object

// console.log(person["name"])

//add
// person.address = `bsp cg`

// console.log(person)
// //update
// person.age = 20
// console.log(person)

// //delete

// delete person.address
// console.log(person)

// shallow copy and deep copy

//shallow copy -> points to the same memory so value modifes if u modify one object
// const person2 = person

// console.log(person2)

//deep copy -> if u modify the person2 original person value will not change
//1st method using spread operator
// const person2 = { ...person }
// person2.name = "preeti"
// console.log(person2)
// console.log(person)

//2nd method using Object.assign({},person)

// difference between freeze and seal method in obj

// in freeze method u cant add update or delete the object
// Object.freeze(person);

// person.name = "jiya"

// console.log(person)
// // check if object is frozen

// console.log(Object.isFrozen(person))

// in seal -> u cant add delete but can update key values

// Object.seal(person)
// person.hobby = "singing"
// person.name = "jiya"
// console.log(person)

// console.log(Object.isSealed(person))


//key values and Entries

// console.log(Object.keys(person))
// console.log(Object.values(person))
//how to check if two object are eaqual
// const person1 = {
//     name: "jyoti"
// }
// const person2 = {
//     name: "jyoti"
// }


// for (let key in person1) {
//     if (person1[key] !== person2[key]) {
//         return false
//     }
// }

//1 find count of all players

const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P2", "P3", "P5"
                ],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                },
            }
        }
    }
}

const countPlayer = (value) => {
    let count = 0
    let entry = {}

    const traverObj = (obj) => {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                count += obj[key].length

                obj[key].forEach((player) => {
                    if (entry[player]) {
                        entry[player] += 1
                    } else {
                        entry[player] = 1;
                    }
                })

            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                traverObj(obj[key])
            }




        }
    }


    traverObj(value)


    return {
        count,
        entry
    }
}

console.log(countPlayer(data))

// gourp the anagram