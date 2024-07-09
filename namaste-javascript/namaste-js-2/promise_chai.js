const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                user: "Mihir",
                email: "mihirxtc@gmail.com"
            }
        )
    }, 1000)   
})

promise.then((user) => {
    console.log(user);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({
                username: "Mihir",
                password: "8011"
            })
        } else {
            reject("Error: something went wrong")
        }
    }, 1000)
})

promise4
 .then((user) => {
    console.log(user);
    return user.username
})
 .then((username) => {
    console.log(username);
})
 .catch((err) => {
    console.log(err.message);
}).finally(() => {
    console.log("Always executes");
})


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "Mihir",
                email: "mihirxtc@gmail.com"
            })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromise5() {
    try {
        const res = await promise5
        console.log(res);
    } catch(e) {
        console.log(e.message);
    }
}
consumePromise5()

// async-await can't handle errors


async function getAllUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data);
    } catch(error) {
        console.log("Error:", error);
    }
}
getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
 .then((res) => {
    return res.json()
 })
 .then((data) => {
    console.log(data);
 })
 .catch((e) => {
    console.log(e);
 })