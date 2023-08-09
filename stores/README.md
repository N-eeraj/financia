## Stores

- ### Main
  > The main.ts file is used for state management regarding to core states of the project.

  - **navDrawerVisibility** _(boolean)_: Indicates if nav drawer is shown or hidden in screen sizes smaller than large.
  - **toggleNavDrawer** _(function)_: Used to toggle the _navDrawerVisibility_

<br>

- ### User
  > The users.ts file is used for state management regarding to user details.

  - **user** _(<UserDetails | null>)_: User details.
    ```
    UserDetails {
      id: number
      name: string
      email: string
    }
    ```
  - **authenticated** _(boolean)_: Indicates if user is authenticated or not.
  - **setUser** _(function)_: Used to set _user_, expects single argument of type _UserDetails_.
  `setUser(user)`
  - **clearUser** _(function)_: Used to clear _user_.