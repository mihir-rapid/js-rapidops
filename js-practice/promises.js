
// => promise means promise of code execution

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a<0.5) {
        reject("number is not supporting")
    } else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("request completed")
        }, 3000)
    }
})

prom1.then((a) => {
    console.log(a);
})