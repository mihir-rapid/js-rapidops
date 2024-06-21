function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

let input_number = 1000000000;
console.log(numberWithCommas(input_number))