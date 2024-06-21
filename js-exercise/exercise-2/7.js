function getMonthFromDate(date) {
    if (!date instanceof Date) {
        throw new Error("Invalid date")
    }

    const monthName = date.toLocaleString("en-US", {month: "long"})
    return monthName
}

const currentDate = new Date()
const monthName = getMonthFromDate(currentDate)
console.log(monthName);