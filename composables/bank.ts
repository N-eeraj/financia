import banks from '@/data/banks.json'
import bankAccounts from '@/data/accounts.json'

interface BankDetails {
  id: number
  name: string
  image: string
  icon: string
}
interface BankAccount {
  id: number
  bankId: number
  accountNumber: number
  ifsc: string
  accountType: number
  balance: number
}

export const getBankDetails = (bankId: number): BankDetails => {
  const bankDetails = banks.find(({ id }) => id === bankId)
  if (bankDetails) return bankDetails
  throw `Invalid Bank Id ${bankId}`
}

export const allBankAccounts: BankAccount[] = bankAccounts

export const getAccountById = (accountId: number): BankAccount => {
  const account = bankAccounts.find(({ id }) => id === accountId)
  if (account) return account
  throw `Invalid Account Id ${accountId}`
}
