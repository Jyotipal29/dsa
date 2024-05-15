//1. print the start pattern

// * * * *
// * * * *
// * * * *



// const printStar = () => {
//     for (let i = 0; i < 4; i++) {
//         let row = ""
//         for (let j = 0; j < 4; j++) {
//             row += "* "
//         }
//         console.log(row)
//     }
// }

// printStar()




// 2
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *


// const print2 = (n) => {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         for (let j = 0; j <= i; j++) {
//             row += "* "
//         }

//         console.log(row)
//     }
// }
// print2(5)


// 3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6


// const print3 = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += j + " "

//         }
//         console.log(row)


//     }
// }

// print3(5)




//4
// if row 1 then 1 time 1
// if row 2 then 2 time 2
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// const print = (n) => {
//     for (let i = 1; i < n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += i + " "
//         }

//         console.log(row)
//     }
// }

// print(5)


//5
// * * *
// * *
// *


// const print = (n) => {
//     for (let i = n; i >= 1; i--) {
//         let row = "";
//         for (let j = 0; j <= i; j++) {
//             row += "*  "
//         }

//         console.log(row)
//     }
// }
// print(5)

// 6
// 1 2 3
// 1 2
// 1

// const print = (n) => {
//     for (let i = n; i >= 1; i--) {
//         let row = " ";

//         for (let j = 1; j <= i; j++) {
//             row += j + " "
//         }

//         console.log(row)
//     }
// }
// print(5)


// 7
//   *
//  ***
// *****


const print = (n) => {
    for (let i = 0; i <= n; i++) {
        let row = " ";
        for (let j = 0; j <= i; j++) {
            row += "*"
        }

        console.log(row)
    }
}

print(5)






