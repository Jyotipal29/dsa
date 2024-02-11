// objects is js

// const person = {
//   name: "jyoti",
//   age: 21,
//   isDev: true,
//   skills: ["js", "reactjs"],
//   projects: {
//     projectOne: "jyocart",
//   },
//   code: function () {
//     return "start coding";
//   },
//   walk: () => {
//     return "start walking";
//   },
// };

// how to access
// console.log(person.age);

// how to add delete and update
// console.log(person.hasOwnProperty("name"));
// modify
// person.name = "pal";
//add
// person.hobbies = "music";
//delete
// delete person.hobbies;

// shallow copy and deep copy
// in shallow copy they share the same refernce
// in shallow copy both object gets modified
// const person2 = person;
// person2.name = "jyoti pal ";
// console.log(person2);
// console.log(person);

// deep copy

// const person3 = Object.assign({}, person);
// person3.skills = null;
// console.log(person3, "person3");
// console.log(person, "person");

// obejcts methods

// freeze method
// in freeze method u cant add delete update keys values
// const person = {
//   name: "jyoti",
//   age: 22,
//   isDev: true,
// };
// Object.freeze(person);
// person.name = "jyoti pal";

// console.log(person);
// to check if this is frozen or not
// console.log(Object.isFrozen(person));

// seal method
// in seal method u cant add or delete key but can upadte key values

// Object.seal(person);
// we cant add
// person.skill = "reactjs";

// but we can upadte
// person.name = "jyoti pal";

// keys, values & enteries

// console.log(Object.keys(person));
// console.log(Object.values(person));
// entries createa array of key value pairs
//[ [ 'name', 'jyoti' ], [ 'age', 22 ], [ 'isDev', true ] ]
// console.log(Object.entries(person));

// loop through an object

//for ....in

// for (let key in person) {
//   console.log(key);
// }









// Object.keys(person).forEach((key) => console.log(key));
// const person2 = {
//   name: "preeti",
//   age: "20",
// };
// console.log(Object.is(person, person2));




// const person = {
//   name: "jyoti",
//   age: 21,
//   isDev: true,
//   skills: ["js", "reactjs"],
//   projects: {
//     projectOne: "jyocart",
//   },
//   code: function () {
//     return "start coding";
//   },
//   walk: () => {
//     return "start walking";
//   },
// };

// Object.keys(person).forEach((key) => console.log(key))





// person.hobbies = ["singing songs"]
// person.age =22

// delete person.code

// console.log(person)

// object.freeze

// Object.freeze(person)
// person.name = "preeti"

// delete person.walk


// console.log(Object.isFrozen(person))
// object.seal

// Object.seal(person)

// person.likes = ["hey"]

// delete person.walk
// person.name ="pal"
// console.log(person)

// let arr  =[]
// for (let key in person) {
//    arr.push(person[key])
// }

// console.log(arr)





// shallow copy
//chieved using {...spread}

const person = {
  name: "jyoti",
  age: 21,
  prof: {
    isDev:true
  }
}

// const person2 = { ...person }

// person2.name = "preeti"

// person2.prof.isDev = false

// console.log(person)
// console.log(person2)

// deep copy is acchived using json.parse and json.stringfy

// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = "hey"
// person2.prof.isDev =false
// console.log(person)
// console.log(person2)



// const person2 = { ...person }
// person2.name = "pal";
// person2.age = 23
// console.log(person)
// console.log(person2)














