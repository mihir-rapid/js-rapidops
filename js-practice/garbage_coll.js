// let user = {
//     name: "john"
// }

// let admin = Object.assign({}, user)

// user.name = "updated"

// console.log(admin);



function marry(man, woman) {
    woman.hasband = man
    man.wife = woman

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "Mihir"
}, {
    name: "Jinisha"
})

delete family.father
delete family.mother.husband

console.log(family);