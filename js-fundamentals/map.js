// map method creates a new array by applying a function to each element of the original array. It does not modify the original array

// key points
// - Transforms each element of the array
// - Returns a new array of the same length
// - Does not change the original array

// Example

let numbers = [2, 5, 7, 8, 12, 17, 20]

let even = numbers.filter(n => n%2==0)
console.log(even);

let odd = numbers.filter(n => n%2==!0)
console.log(odd);

let sum = numbers.reduce((acc, val) => acc + val, 4)
console.log(sum);
