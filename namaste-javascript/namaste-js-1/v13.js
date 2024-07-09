a()
function a(){
    console.log(`this is a`);
}

b()
function b(){
    console.log(`this is b`);
}

// the major difference between function statement and function expression is hoisting 

// anonymouse function does not have their own identity

// syntax error
// function() {}    without function name

// named function expression
// let x = function y(){ ... }  // valid function


// => the ability to use function as value is known as first-class functions

var x = function() {
    return function() {

    }
}

console.log(x());
// First class citizen