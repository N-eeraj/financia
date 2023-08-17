## Stores

- ### Main
  > The main.ts file is used for state management regarding to core states of the project.

    ```
    Notification {
      id: number
      title: string
      body: string
      time: string
    }
  ```


  - **navDrawerVisibility** _(boolean)_: Indicates if nav drawer is shown or hidden in screen sizes smaller than large.
  - **toggleNavDrawer** _(function)_: Used to toggle the _navDrawerVisibility_.
  - **setNavDrawer** _(function)_: Used to set the _navDrawerVisibility_ to the single _boolean_ argument passed.
  `setNavDrawer(true)`

  <br>

  - **allNotifications** _(array)_: An array of _Notification_.
  - **newNotification** _(function)_: Used to add new notification to _allNotifications_. Expects a single argument of _Notification_ type.
  `newNotification(notification)`
  - **readNotification** _(function)_: Used to remove the notification of the given id from _allNotifications_. Expects a single argument of _number_ type.
  `readNotification(3)`
  - **readAllNotification** _(function)_: Used to clear _allNotifications_.

  <br>

  - **profileMenuVisibility** _(boolean)_: Indicates if profile menu is shown or hidden.
  - **toggleProfileMenu** _(function)_: Used to toggle the profileMenuVisibility.
  - **setProfileMenu** _(function)_: Used to set the profileMenuVisibility to the single _boolean_ argument passed.
  `setProfileMenu(true)`

  <br>

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