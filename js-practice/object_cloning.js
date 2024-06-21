// => Methods of object cloning

// 1. spread operator
// 2. Object.assign() method
// 3. iteration through loops  

let src = {
    age: 12,
    ht: 182,
    wt: 65
}

let src2 = {
    name: "Mihir",
    isAdult: true
}

// # using spread opetor
// let dest = {...src, ...src2}

// # using Object.assign() method
// let dest = Object.assign({}, src, src2)


// # using iteratoin
let dest = {}
for (let key in src) {
    let newKey = key;
    let newValue = src[key]

    // insert newKey and newValue in dest and create a clone
    dest[newKey] = newValue;
}

src.wt = 90

console.log("src: ", src);
console.log("dest: ", dest);