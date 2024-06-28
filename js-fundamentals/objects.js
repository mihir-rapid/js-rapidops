// task 2
let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}


// task 3
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)

function multiplyNumeric(obj){
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2
        }
    }
}

console.log(menu);