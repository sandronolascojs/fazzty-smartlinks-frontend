export const visitsCounter = (fullDates) => {
  if (fullDates.length === 0) {
    const date = new Date()
    const dateFormated = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
    return [{ date: dateFormated, visits: 0 }]
  }
  const visitsString = {}
  const visitsArray = []

  fullDates.forEach((fullDates) => {
    const date = new Date(fullDates)
    const dateFormated = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`

    if (visitsString[dateFormated] === undefined) {
      visitsString[dateFormated] = 1
      visitsString[dateFormated] = { date: dateFormated, visits: 1 }
      visitsArray.push(visitsString[dateFormated])
    } else {
      visitsString[dateFormated].visits += 1
    }
  })

  return visitsArray
}
