export const timePassed = (date: Date): string => {
  const now = new Date()
  let timeElapsed = Math.floor((now.getTime() - date.getTime()) / 1000)

  // under a minute
  if (timeElapsed < 60)
  return 'Just Now'
  
  // time in minutes
  timeElapsed = Math.floor(timeElapsed / 60)
  if (timeElapsed < 60)
    return `${timeElapsed} Minute${timeElapsed > 1 ? 's' : ''} ago`

  // time in hours
  timeElapsed = Math.floor(timeElapsed / 60)
  if (timeElapsed < 24)
    return `${timeElapsed} Hour${timeElapsed > 1 ? 's' : ''} ago`

  // time in days
  timeElapsed = Math.floor(timeElapsed / 24)
  return `${timeElapsed} Day${timeElapsed > 1 ? 's' : ''} ago`
}