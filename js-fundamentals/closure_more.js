// function outerFunction(outerVariable) {
//     const outerConst = 'I am an outer constant';

//     function innerFunction(innerVariable) {
//         console.log('Outer Variable:', outerVariable);
//         console.log('Outer Constant:', outerConst);
//         console.log('Inner Variable:', innerVariable);
//     }

//     return innerFunction;
// }

// const closureInstance = outerFunction('I am an outer variable');
// closureInstance('I am an inner variable');



function fn() {
    for (let i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}
fn()

function fn1() {
    for (var i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}
fn1()