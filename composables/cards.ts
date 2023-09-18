import cards from '@/data/cards.json'

interface CardDetails {
  id: number
  type: string
  bankId: number
  cardNumber: number
  networkProvider: string
  expiryDate: string
}

export const allCards: CardDetails[] = cards

export const allDebitCards: CardDetails[] = cards.filter(({ type }) => type === 'debit')

export const allCreditCards: CardDetails[] = cards.filter(({ type }) => type === 'credit')

export const getCardById = (cardId: number): CardDetails => {
  const card = cards.find(({ id }) => id === cardId)
  if (card) return card
  throw `Invalid Account Id ${cardId}`
}
