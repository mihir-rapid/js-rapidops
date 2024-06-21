function getTimeDifference(startDate, endDate) {
    const timeDifference = endDate - startDate

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30.44)
    const years = Math.floor(months / 12)

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    }
}

const startDate = new Date("2024-01-01")
const endDate = new Date()
const timeDifference = getTimeDifference(startDate, endDate)
console.log(timeDifference);