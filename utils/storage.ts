interface KeyValue {
  key: string
  value: any
}

const APP_NAME = 'financia'

const readFromLocalStorage = () => JSON.parse(localStorage.getItem(APP_NAME) || '{}')

const writeToLocalStorage = (storage: object) => localStorage.setItem(APP_NAME, JSON.stringify(storage))

export const resetLocalStorage = () => localStorage.removeItem(APP_NAME)

export const getFromStorage = (key: string) => {
  const storage = readFromLocalStorage()
  return storage[key]
}

export const setToStorage = ({ key, value }: KeyValue) => {
  const storage = readFromLocalStorage()
  storage[key] = value
  writeToLocalStorage(storage)
}

export const removeFromStorage = (key: string) => {
  const storage = readFromLocalStorage()
  delete storage[key]
  writeToLocalStorage(storage)
}