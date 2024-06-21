function sum(a, b){
    return a + b
}
console.log(sum(1, 2, 3, 4, 5));



function sumAll(...args){
    let sum = 0
    for (let arg of args){
        sum += arg
    }
    return sum
}
console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));



function showName(firstName, lastName, ...titles){
    console.log(`${firstName} ${lastName}`);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles[2]);
}
console.log(showName("Mihir", "Menon", "end", "of", "beginning"));



// "argument" variable

function showName1(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
console.log(showName1("Mihir", "Mihir"));
console.log(showName("Ilya"));



// arrow function do not have "arguments"

function f(){
    let showArg = () => {
        console.log(arguments[0]);
    }
    showArg()
}
console.log(f(1));



function friends(...names){
    console.log(names)
}
friends("Mihir")
friends("Mihir", "Aryan")
friends("Mihir", "Aryan", "Karan")
friends("Mihir", "Aryan", "Karan", "Anuj")



    //  //  //  //  //  //  //  //  //
// ========== spread syntax ========== //
    //  //  //  //  //  //  //  //  //

console.log(Math.max(3, 5, 1));

let arr = [3, 5, 1]

// gives an error
console.log(Math.max(arr));

// spread
console.log(Math.max(...arr));


let arr1 = [1, -2, 3, 4]
let arr2 = [8, 3, -8, 1, 9]
console.log(Math.max(...arr1, ...arr2));


// spread used to merge array

let merged = [...arr1, ...arr2]
console.log(merged);



// converting string using spread
let str = "thisisthelongstring"
console.log(str);
console.log(...str);
console.log([...str]);
console.log({...str});



// copy array/object

// array

let arr3 = [1, 2, 3]
let arrCopy = [...arr3]
arr3.pop()
console.log(arr3);
console.log(arrCopy);

console.log(JSON.stringify(arr3) === JSON.stringify(arrCopy));

console.log(arr3 === arrCopy);


// object
let obj = {
    name: "Mihir",
    age: 20,
    isAdmin: false
}

let newObj = {...obj}
obj.name = "smith"
console.log(obj);
console.log(newObj);

console.log(JSON.stringify(obj) === JSON.stringify(newObj));

console.log(obj === newObj);

console.log(JSON.stringify(obj));
console.log(JSON.stringify(newObj));
