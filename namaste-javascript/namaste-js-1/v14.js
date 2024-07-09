// what is callback functions in javascript

setTimeout(() => {
    console.log("timer");
}, 1000)

function x(y){
    console.log("x");
}

x(function y(){
    console.log("y");
})

// javascript a synchronous and single-threaded language

// blocking the main thread

// power of callbacks
