let arr = [1, 2, 3, 4, 3, 2, 4, 1]

let common = arr.filter((item, index) => arr.indexOf(item) === index)

console.log(common)