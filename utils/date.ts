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

export const timeLeft = (daysLeft: number): string => {
  if (!daysLeft)
    return 'Today'
  if (daysLeft === 1)
    return 'Tomorrow'
  if (daysLeft < 7)
    return `in ${daysLeft} days`
  return `in ${Math.ceil(daysLeft / 7)} weeks`
}
