
export const artistsUpperCasse = (artists) => {
  const allArtists = []
  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i].charAt(0).toUpperCase() + artists[i].slice(1)
    allArtists.push(artist)
  }
  return allArtists.join(', ')
}
