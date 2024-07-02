// Immediately Invoked Function Expression (IIFE)

// named IIFE
(function chai() {
    console.log(`DB Connected`);
})();


// unnamed/anonymouse IIFE 
( (name) => {
    console.log(`${name} connected`);
})('user_db');


(function hello() {
    console.log("Hello");
})()