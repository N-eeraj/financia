interface Formatter {
  capitalize: Function
  currencyFormatter: Function
  splitFormatter: Function
  hiddenFormatter: Function
}

const useFormatter = (): Formatter => {
  const capitalize = (string: string): string => string.split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')

  const currencyFormatter = (amount: number): string => Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)

  const splitFormatter = (number: string): string => String(number)
    .split('')
    .map((num, i) => {
      let s = num
      if (i && !(i%4)) s = ` ${s}`
      return s
    })
    .join('')

  const hiddenFormatter = (number: string): string => splitFormatter(String(number)
    .slice(-4)
    .padStart(16, 'X'))

  return {
    capitalize,
    currencyFormatter,
    splitFormatter,
    hiddenFormatter,
  }
}

export default useFormatter
