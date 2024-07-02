// Hoisting refers to the process whereby the interpreted appears to move the declaration to the top of the code before execution

// variables can thus be referenced before they are declared in javascript

// javascript only hoists declarations, not initializations, variable will be undefined until the line where initialization is reached

// greet()

function greet() {
    console.log("good morning");
}

// let [name, email] = "Mihir mihirxtc@gmail.com".split(" ")
// console.log(name);
// console.log(email);


// => function hoisting

// through hoisting, the function becomes accessible even before the line it was declared in the code

// printHello()
// printDillion()

function printHello() {
    console.log("hello");

    // printDillion()
    function printDillion() {
        console.log("dillion");
    }
}

// hoisting does not occur on function expression


// => Variable Hoisting

// var

console.log(name);  // undefined, but no Error

var name = "Mihir"
console.log(name);


print()

function print() {
    console.log("in print name is", name);

    var name = "smith"
}

// var has default value of 'undefined'


// let

// console.log(name1); // ReferenceError: cannot access 'name' before initialization

let name1 = "Mihir" 

// Temporal Dead Zone

// only be accessible after the initialization line has been executed

console.log(name1);



// const

// same concept of Temporal Dead Zone

// hoisted to the top of the scope they are declared

// console.log(name2);  // ReferenceError: same as let
const name2 = "Jack"

console.log(name2);