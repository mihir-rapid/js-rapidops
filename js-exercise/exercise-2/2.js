function main() {
    let str = "25441689"
    let ans = ""
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) % 2 == 0 && str.charAt(i+1) % 2 == 0) {
            ans += (str.charAt(i) + "-")
        } else {
            ans += str.charAt(i)
        }
    }
    console.log(ans)
}
main()