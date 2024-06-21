function convertFromUnixTimeStamp(unixTimeStamp) {
    const timeStampInMS = unixTimeStamp * 1000
    const date = new Date(timeStampInMS)

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        timeZoneName: "short",
        timeZone: "Asia/Kolkata"
    }

    const formattedTime = date.toLocaleString("en-IN", options)
    return formattedTime
}

const unixTimeStamp = 1607518718
const formattedTime = convertFromUnixTimeStamp(unixTimeStamp)
console.log(formattedTime);