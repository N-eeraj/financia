import banks from '@/data/banks.json'

interface BankDetails {
  id: number
  name: string
  image: string
  icon: string
}

export const getBankDetails = (bankId: number): BankDetails => {
  const bankDetails = banks.find(({ id }) => id === bankId)
  if (!bankDetails)
    throw `Invalid Bank Id ${bankId}`
  return bankDetails
}
