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