// => Pyramind of Doom

const cart = ["Laptop", "Computer", "CPU Unit"];

api.createOrder(cart, () => {

    api.proceedToPayment(() => {

        api.showOrderSummary(() => {

            api.updateWallet();

        });

    });
    
});


// => Inversion of control
// you lose the control of code, while using callbacks
