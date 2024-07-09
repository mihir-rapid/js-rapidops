const cart = [
    {
        itemName: "Shoes",
        itemPrice: 2000
    },
    {
        itemName: "Pant",
        itemPrice: 2500
    },
    {
        itemName: "Kurta",
        itemPrice: 1500
    }
]

let walletBalance = 10000

createOrder(cart)
 .then((orderId) => {
    return orderId
 })
 .then((orderId) => {
    return proceedToPayment(orderId)
 })
 .then((orderStatus) => {
    return showOrderSummary(orderStatus)
 })
 .then((orderHistory) => {
    return updateWallet(orderHistory)
 })
 .then((res) => {
    console.log(res);
 })
 .catch((err) => {
    console.log(err.message)
 })

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            reject(new Error("Cart is not valid"))
        }
        let orderId = 21
        if(orderId) {
            resolve(orderId)
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) {
            resolve({
                paymentStatus: 1,
                message: "Payment successful"
            }) 
        } else {
            reject(new Error("Payment Failed"))
        }
    })
}

function showOrderSummary(orderStatus) {
    return new Promise((resolve, reject) => {
        if (orderStatus.paymentStatus === 1) {
            resolve({
                status: "success",
                orders: cart
            })
        } else {
            reject(new Error("Something went wrong"))
        }
    })
}

function updateWallet(orderHistory) {
    return new Promise((resolve, reject) => {
        if (orderHistory.status === "success") {
            const orderAmount = 6000
            walletBalance = walletBalance - orderAmount
            resolve({
                balance: walletBalance,
                message: "Wallet Updated"
            })
        } else {
            reject(new Error("Wallet balance not updated"))
        }
    })
}

function validateCart(cart) {
    return true
}