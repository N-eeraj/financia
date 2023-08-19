interface KeyValue {
  key: string
  value: any
}

const APP_NAME = 'financia'

const readFromLocalStorage = (): any => JSON.parse(localStorage.getItem(APP_NAME) || '{}')

const writeToLocalStorage = (storage: object): void => localStorage.setItem(APP_NAME, JSON.stringify(storage))

export const resetLocalStorage = (): void => localStorage.removeItem(APP_NAME)

export const getFromStorage = (key: string): any => {
  const storage = readFromLocalStorage()
  return storage[key]
}

export const setToStorage = ({ key, value }: KeyValue): void => {
  const storage = readFromLocalStorage()
  storage[key] = value
  writeToLocalStorage(storage)
}

export const removeFromStorage = (key: string): void => {
  const storage = readFromLocalStorage()
  delete storage[key]
  writeToLocalStorage(storage)
}