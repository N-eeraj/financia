### Composables

- #### Main
  > This composable consists of the core reusable functionality of the project that is required globally.

  - **toastify**: Function used to make alert toasts. The function expects 2 arguments, _text_ of _string_ type & _type_ of _ToastType_ type.

  > The main composable also imports & exports the _storage_ utility functions & make them globally available.

<br>

- #### NavDrawer
  > Used to handle navigation drawer visibilty.
  - **navDrawerVisibility** _(boolean)_: Global reference to Vue ref in **main store** indicating navigation drawer visibility.
  - **toggleNavDrawer** _(function)_: Global reference to function in **main store** used to toggle navigation drawer visibility.

<br>

- #### Stores
  > This composable file imports & exports the all the _Pinia stores_ & makes them globally available.

<br>


- #### Users
  > This composable validates the login & sign up details.
  - **validateUserLogin**: This function checks if the given user credentials is present in the _users data_.
    ```
    LoginDetails {
      email: string
      password: string
    }
    ```
    Expects a single argument of type _LoginDetails_.
  - **validateUserSignUp**: This function checks if the given details is already present in the _users data_.
    ```
    SignUpDetails {
      name: string
      email: string
      password: string
    }
    ```
    Expects a single argument of type SignUpDetails.

<br>

- #### Validations
  > Consists of validation functions.
  - **validateForm**: Used to validate a form object of template refs of the form inputs and returns if all the fields are valid or not.
  - **requiredValidation**: Returns true if the argument value is truthy.
  - **nameValidation**: Returns true if the _name_ argument is valid.
  - **emailValidation**: Returns true if the _email_ argument passes regex test.
  - **passwordValidation**: Returns true if the _password_ argument passes the password validations.
  - **confirmValidation**: Returns true if the first & second arguments are equal. The function also accepts a third argument which is sets the error message.

<br>

- #### Data
  > This composable file imports & exports the required _data_ files & makes them globally available.