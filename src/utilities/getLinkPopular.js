export const getLinkPopular = (linksArray) => {
  const mostVisit = linksArray.reduce((prev, current) => (prev.visits > current.visits) ? prev : current)
  return mostVisit
}

// create function to order by quantity of visits and return the most visited link fist
export const orderByVisits = async (linksArray) => {
  return linksArray.sort((a, b) => {
    return b.visits.length - a.visits.length
  })
}
