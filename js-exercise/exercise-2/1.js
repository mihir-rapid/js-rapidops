function main(n) {
    let static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    let firstElements = static_array.slice(0, n)
    let lastElements = static_array.slice(-n)

    console.log(firstElements)
    console.log(lastElements)
}
main(5)
