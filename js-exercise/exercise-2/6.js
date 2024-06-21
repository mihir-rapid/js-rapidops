let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let k = 2
let n = arr.length
let i = 0
let str = ""

while (i < n) {
    str += arr[i] + ", "
    i += k
}

console.log(str);