// function parent() {
//     let name = "Hello, World"
//     function child1() {
//         console.log("child1", name);
//     }
//     function child2() {
//         console.log("child2", name);
//     }   
//     child1()
//     child2()
// }
// parent()



function makeFunc() {
    const name = "bottle"
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc()
myFunc()
