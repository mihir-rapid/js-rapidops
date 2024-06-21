// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b')
console.log(sum(1, 2));

let sayHi = new Function('console.log("Hello")')
sayHi()



// => new Function allows to turn any string into function

let str = 'console.log("Hello, Func")'
let func = new Function(str)
func()



// => closure

// using new
function getFunc(){
    let value = "test"
    let func = new Function('console.log(value)')
    return func
}
getFunc()()


// regular function expression
function getFunc(){
    let value = "test"
    let func = function() { console.log(value) ;}
    return func
}
getFunc()()









