function getDateDifference(startDate, endDate) {
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
        throw new Error("Invalid date")
    }

    const timeDifference = endDate - startDate

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30.44)
    const years = Math.floor(months / 12)

    const difference = {
        years,
        months: months % 12,
        days: Math.floor(days % 30.44)
    }
    return difference
}

const startDate = new Date("2020-02-05T00:00:00Z")
const endDate = new Date("2028-04-25T00:00:00Z")
const difference = getDateDifference(startDate, endDate)
console.log(difference);