function main() {
    let arr = [1, 2, 3, 4, 5, 5 ,5, 6, 5]

    let obj = {}
    let repited
    let max = 0

    for (let i=0; i<arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
}
main()