const accountNumberFormatter = (accNo: string) => String(accNo).split('')
  .map((num, i) => {
    let s = num
    if (i < 12) s = 'X'
    if (i && !(i%4)) s = ` ${s}`
    return s
  })
  .join('')

export default accountNumberFormatter
