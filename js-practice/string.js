// Accessing characters

// let str = `Hello`

// first character
// console.log(str[0])
// console.log(str.charAt(2))

// last character
// console.log(str[str.length - 1])
// console.log(str.charAt(-1))


// changing the case

// console.log("Interface".toUpperCase())
// console.log("Interface".toLowerCase())


// Searching for a substring

// let str = "Widget with id"
// console.log(str.length)
// console.log(str.indexOf('Widget'))
// console.log(str.indexOf('widget'))
// console.log(str.indexOf("id"))

// let str = "As sly as a fox, as strong as an ox";
// let target = 'as'
// let pos = 0
// while (true) {
//     let foundPos = str.indexOf(target, pos)
//     if (foundPos == -1) break

//     console.log(`Found at ${foundPos}`)
//     pos = foundPos + 1
// }

// layed shorter

// let str = "As sly as a fox, as strong as an ox"
// let target = "as"

// let pos = -1
// while((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log(pos)
// }


// ***********************************

// dosen't work
// let str = "Widget with id"
// if (str.indexOf("Widget")) {
//     console.log("We fount it")
// }

// works
// let str = "Widget with id"
// if (str.indexOf("Widget") != -1) {
//     console.log("We found it")
// }


// === includes, startsWith, endsWith === //

// console.log("Widget with id".includes("Widget"))
// console.log("Hello".includes("Bye"))

// console.log("Widget".includes("id"))
// console.log("Widget".includes("id", 3))

// console.log("Widget".startsWith("Wid"))
// console.log("Widget".endsWith("get"))



// Getting a substring

// let str = "stringify"
// console.log(str.slice(0, 5))
// console.log(str.slice(0, 1))

// console.log(str.slice(2));
// console.log(str.slice(-4, -1))

// console.log(str.substring(2, 6))
// console.log(str.substring(6, 2))

// console.log(str.slice(2, 6))
// console.log(str.slice(6, 2))


// console.log(str.substr(2, 4))
// console.log(str.substr(-4, 2))


// console.log("Z".codePointAt(0))
// console.log("z".codePointAt(0))
// console.log("z".codePointAt(0).toString(16))

// console.log(String.fromCodePoint(90))
// console.log(String.fromCodePoint(0x05a))




// =====> String Exercise

// 1
// function ucFirst(str) {
//     if (!str) return str

//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("john"))


// 2.
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase()
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx')
// }
// console.log( checkSpam('buy ViAgRa now') )
// console.log( checkSpam('free xxxxxx') )
// console.log( checkSpam('innocent rabbit') )

// 3

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ? str.slice(0, maxlength -1) + '...' : str
// }


// 4
// function extractCurrencyValue(value) {
//     return +str.slice(1)
// }
// extractCurrencyValue(1000)