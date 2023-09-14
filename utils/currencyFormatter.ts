const currencyFormatter = (amount: number) => Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)

export default currencyFormatter
