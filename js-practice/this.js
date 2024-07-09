// this == current execution context

function getThis() {
    return this
}

const user1 = {
    name: "mihir",
    age: 21
}

const user2 = {
    name: "kuldeep",
    age: 27
}

user1.getThis = getThis
user2.getThis = getThis

console.log(user1.getThis())
console.log(user2.getThis())
