export function getSongDuration (duration) {
  const totalNumberOfSeconds = Math.floor(duration)
  const hours = parseInt(totalNumberOfSeconds / 3600)
  const minutes = parseInt((totalNumberOfSeconds - (hours * 3600)) / 60)
  const seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))))
  const result = (minutes < 10 ? +minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
  return result
}

export function getFullDuration (song) {
  return getSongDuration(song.currentTime) + '/' + getSongDuration(song.duration)
}
