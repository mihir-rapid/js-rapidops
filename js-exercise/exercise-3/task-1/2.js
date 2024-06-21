function hideEmail(email) {
    let [username, domain] = email.split("@")

    let hiddenUsername = username.charAt(0) + "*".repeat(username.length - 2) + username.slice(-1)

    return hiddenUsername + "@" + domain
}

let email = prompt("Enter an email address")

alert(hideEmail(email));