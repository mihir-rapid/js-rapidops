// map is used to transform an array

const arr = [5, 1, 3, 2, 21, 6, 7];

// double 
// triple
// binary

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2)
// }

// => map

// const output = arr.map((x) => x.toString(2))
// console.log(output);


// => filter

// const odds = arr.filter((x) => x%2!=0)
// console.log(odds);


// => reduce

// sum
// function findSum(arr) {
//     let sum = 0;
//     for (let i=0; i<arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// console.log(output);

// max
// function findMax(arr) {
//     let max = 0
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr));

// const output = arr.reduce((max, curr) => {
//     if (curr > max) {
//         max = curr
//     }
//     return max
// }, 0)

// console.log(output);


// reduce examples =>

const users = [
    { firstName: "Mihir", lastName: "Menon", age: 20},
    { firstName: "Krish", lastName: "Aagja", age: 18},
    { firstName: "Kuldeep", lastName: "Solanki", age: 27},
    { firstName: "Kuldeep", lastName: "Solanki", age: 27}

];

const output = users.map((x) => {
    return `${x.firstName} ${x.lastName}`
})

console.log(output);

const output1 = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log(output1);

const output2 = users.filter((x) => x.age <=20).map((x) => x.firstName);

console.log(output2);