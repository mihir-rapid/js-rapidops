const GITHUB_URL ="https://api.github.com/users/mihirxtc"

fetch(GITHUB_URL)
 .then((res) => {
    return res.json()
 })
 .then((data) => {
    console.log(data.name);
 })