export const getLinkPopular = (linksArray) => {
  // count the number of visits for each link and return the link with the most visits
  const links = linksArray.map((link) => {
    const filter = linksArray.filter((item) => item === link.visits).length
    return filter
  })

  console.log(links)
}

// const mostVisit = linksArray.reduce((prev, current) => (prev.visits > current.visits) ? prev : current)
// return mostVisit

// create function to order by quantity of visits and return the most visited link fist
/* export const orderByVisits = async (linksArray) => {
  return linksArray.sort((a, b) => {
    return b.visits.length - a.visits.length
  })
} */
