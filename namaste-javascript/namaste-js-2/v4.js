// promise chaining

const cart = ["shoes", "pants", "kurta"]

createOrder(cart)
    .then((orderId) => {
        console.log(orderId)
        return orderId
    })
    .then((orderId) => {
        return proceedToPayment(orderId)
    })
    .then((payrmentInfo) => {
        console.log(paymentInfo);
    }) 
    .catch((err) => {
        console.log(err.message);
    })
    


function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        // createOder
        // validateCart
        // orderId

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        }
        
        // logic for createOrder
        const orderId = "12345"
        if(orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 5000)
        }
    })

    return pr
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    return true
}

// we can not call resolve twice