const cart = ["shoes", "pants", "kurta"]

createOrder(cart, (orderId) => {
    proceedToPayment(orderId, (paymentInfo) => {
        showOrderSummary(paymentInfo, () => {
            updateWalletBalance()
        })
    })
})

const promise = createOrder(cart)

// using promise syntax
createOrder(cart)
    .then((orderId) => {
        return proceedToPayment(orderId)
    })
    .then((paymentInfo) => {
        return showOrderSummary(paymentInfo)
    })
    .then((paymentInfo) => {
        return updateWalletBalance(paymentInfo)
    })

// note: always return a promise from promoise

// => promise

// promise comes with lot of trust

// promise is an object which represent eventual completion of asynchronous operation

const GITHUB_API = "https://api.github.com/users/mihirxtc"

const user = fetch(GITHUB_API)

console.log(user);

// =>  steps of promise
// 1. promise State
// 2. promise Result

// => states of promise
// 1. pending
// 2. fullfiled
// 3. rejected

// => promise objects are immutable

user.then((data) => {
    console.log(data);
})

// => The promise is a placeholder, which will be filled later with value,

// => The promise is a placeholder for certain period of time until we recieve a value from asynchronous operation

// => The pormise is a container

// => The promise is a object representing the eventual completion of failure of an asynchronous operation [mdn docs]
