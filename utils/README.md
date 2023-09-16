## Utils

- ### Storage
  > The storage.ts file is used to access the localstorage related to this project.
  - **setToStorage**: This function is used to store data to localstorage.
    The function expects a single object argument of _KeyValue_ type.
    ```
    KeyValue {
      key: string
      value: any
    }
    ```
    ```
    setToStorage({
      key: 'keyName',
      value: valueToStore
    })
    ```
  - **getFromStorage**: This function is used to fetch the specified data from the localstorage. This function expects a single string argument.
  `getFromStorage('keyName')`
  - **removeFromStorage**: This function is used to clear specified data from the localstorage. This function expects a single string argument.
  `removeFromStorage('keyName')`
  - **resetLocalStorage**: This function can be used to clear all the data related to this project in the localstorage.

- ### Date
  > The date.ts file contains the functions used to format the date in several way.

  - **timePassed**: This function can be used to format time as time elapsed. Returns a string with time in _minutes_, _hours_, _days_ or _Just Now_ if time elapsed is less than 1 minute.

- #### Formatter
  > The useFormatter.ts file consists of a functions to format strings to several formats.
  - **capitalize**: Formats string text to title case.
  `capitalize('hello world')`
  retuens _Hello World_
  - **currencyFormatter**: Formats a number to the Indian currency format.
  `currencyFormatter(12345)`
  returns _₹12,345.00_
  - **splitFormatter**: Splits a 16 digit number to four 4 digit numbers.
  `splitFormatter('1234123412341234')`
  Returns _1234 1234 1234 1234_
  - **hiddenFormatter**: Splits a 16 digit number to four 4 digit numbers, also while hiding the first 12 numbers.
  `hiddenFormatter('1234123412341234')`
  Returns _XXXX XXXX XXXX 1234_