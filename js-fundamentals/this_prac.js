// "use strict"

let obj = {
    name: "Mihir",
    age: 21,
    call: function() {
        x = () => {
            console.log(this.name);
        }
        x()
    }
}

obj.call()