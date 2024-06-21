function isEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return emailPattern.test(email)
}

let email = prompt("Enter an email")
let res = isEmail(email)

if (res == true) {
    alert(`email is validated`)
} else {
    alert(`email is not validated`)
}