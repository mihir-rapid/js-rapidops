let players = [
    {
        name: "Mihir",
        sports: ["cricket", "chess"]
    },
    {
        name: "Aryan",
        sports: ["cricket", "football"]
    },
    {
        name: "Karan",
        sports: ["table-tennis", "football"]
    }
]

let sportsMap = {}

players.forEach(player => {
    let {
        name,
        sports
    } = player

    sports.forEach(sport => {
        if (!sportsMap[sport]) {
            sportsMap[sport] = []
        }

        sportsMap[sport].push(name)
    })
})


let output = Object.keys(sportsMap).map(sport => ({
    [sport]: sportsMap[sport]
}))

console.log(output);