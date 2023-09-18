### Composables

- #### Main
  > This composable consists of the core reusable functionality of the project that is required globally.

  - **toastify**: Function used to make alert toasts. The function expects 2 arguments, _text_ of _string_ type & _type_ of _ToastType_ type.

  - **authDashboard**: _PageMeta_ data that sets the _layout_, _visitor_ & _user_ page meta details.

  > The main composable also imports & exports the _storage_ utility functions & make them globally available.

<br>

- #### Dashboard Layout
  > Used to handle changes in the dashboard layout.
  > Global reference to Vue refs & functions in **main store**.
  - Nav Drawer
    - **navDrawerVisibility** _(boolean)_: Global reference indicating navigation drawer visibility.
    - **toggleNavDrawer** _(function)_: Global reference used to toggle navigation drawer visibility.
    - **setNavDrawer** _(function)_: Global reference used to set navigation drawer visibility to the _boolean_ argument passed.

  - Notifications List
    - **notificationListVisibility** _(boolean)_: Global reference indicating notification visibility.
    - **toggleNotificationList** _(function)_: Global reference used to toggle notification list visibility.
    - **setNotificationList** _(function)_: Global reference used to set notification list visibility to the _boolean_ argument passed.

  - Profile Menu
    - **profileMenuVisibility** _(boolean)_: Global reference indicating profile menu visibility.
    - **toggleProfileMenu** _(function)_: Global reference used to toggle profile menu.
    - **setProfileMenu** _(function)_: Global reference used to set profile menu to the _boolean_ argument passed.

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

- ### Bank
  - **getBankDetails**: A function used to get bank details using a bank id.
  - **allBankAccounts**: A constant with a list of all bank account details.
  - **getAccountById**: A function used to get bank account details by id.

<br>

- ### Cards
  - **allCards**: A constant with a list of all card details.
  - **allDebitCards**: A constant with a list of all debit card details.
  - **allCreditCards**: A constant with a list of all credit card details.
  - **getCardById**: A function used to get card details by id.

<br>

- #### Data
  > This composable file imports & exports the required _data_ files & makes them globally available.