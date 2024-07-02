// => function along with it's lexical scope bundle together forms a closure

// function defines the closure remembers the environment in which it was created


// example 1
function numberGenerator() {
    var num = 1
    function checkNumber() {
        console.log(num)
    }
    num++
    return checkNumber
}

var number = numberGenerator()
number()


// example 2
function sayHello() {
    var say = function() {
        console.log(hello);
    }
    var hello = "hello world"
    return say
}

var sayHelloClosure = sayHello()
sayHelloClosure()


// we have access to variables defined in enclosing functions even after the enclosing function which defines these variable has returned


// 

var x = 10
function foo(a){
    var b = 20
    function bar(c){
        var d = 30
        return boop(x + a + b + c + d)
    }
    function boop(e){
        return e * -1
    }
    return bar
}

var moar = foo(5)
moar(15)
