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