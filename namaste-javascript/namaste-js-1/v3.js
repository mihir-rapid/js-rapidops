// Hoisting = accessing variable & function before it's initialization

// getName()
// console.log(x);
console.log(getName)
console.log(getName1);

var x = 7

function getName() {
    console.log("Namaste JavaScript");
}

var getName1 = () => {
    console.log("Namaste JavaScript Again");
}