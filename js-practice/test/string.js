// working with strings

// slice
console.log("thisisthelongeststringintheworld".slice(-5));

// trim()
let str = "hello world  "
console.log(str.trim());

// split()
let [name, surname] = "John Smith".split(" ");
console.log(`${name} ${surname}`);

// accesing element of string
let newstring = "hello"
console.log(newstring[0]);
console.log(newstring.charAt(1));

// toUpperCase()s
console.log("simple".toUpperCase());


// toLowerCase()
console.log("SIMPLE".toLowerCase());


// indexOf()
let string1 = "world Hello"
console.log(string1.indexOf("hello"));
console.log(string1.includes("world", -1));
console.log(string1.startsWith("w"));
console.log(string1.endsWith("o"));


// substring()
console.log(string1.substring(3, 0));
