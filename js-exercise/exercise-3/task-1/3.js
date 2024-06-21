function removeTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, "")
}

console.log(removeTags("<h1><strong>passoword</strong></h1>"));