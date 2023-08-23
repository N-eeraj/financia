# Financia
![alt text for screen readers](public/favicon.ico)

---

## 👨‍💻 Tech Used
- [Nuxt 3](https://nuxt.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)
- [Nuxt Icon](https://nuxt.com/modules/icon)
- [Vue3 toastify](https://vue3-toastify.js-bridge.com/)

---

## ✨ Getting Started
This is a single page app (SPA) built using Nuxt.
- Fork this repo
- Install node_modules using the `npm i` command.
- Run the web app using the `npm run dev` command.
This will start the web app on a port in your local server.

---

## 📁 File Structures
- ### Pages
  > This directory consists of the pages of the website. The web routes are made-up using the directory structure.
  ```
    - index.vue
    - home.vue
    - dashboard
      - index.vue
      - accounts.vue
      - [id].vue
  ```
  The above folder structre results in 5 routes.
  - /
  - /home
  - /dashboard
  - /dashboard/accounts
  - /dashboard/:id

  You can create a dynamic route, by enclosing the parameter name within square brackets.
  Here id can be used as route parameter.
  <br>

  > You can set if the page can be accessed without login based on the meta property of **visitor** _(boolean)_.
  > You can set if the page can be accessed on login based on the meta property of **user** _(boolean)_.

  ```
  definePageMeta({
    visitor: false,
    user: true,
  })
  ```

  - ### Layouts
  > This directory consists of layouts for page. The default layout is _default.vue_, it can be changed by adding a meta property of the layout name as _layout_.
  ```
  definePageMeta({
    layout: "dashboard"
  })
  ```

  - ### Components
  > This directory consists of the Vue component files used in other components or directly in pages.

  - ### Composables
  > This directory consists of the globally available functions & variables that may make use of some special features of Vue JS.

  - ### Utils
  > This directory consists of files with helper functions.

  - ### Data
  > This directory consists of files with dummy data & data to be used as the content in the pages.

  - ### Cypress
  > This directory contains test files.

---

##🌐 Web Pages & Features ⚙️
- Landing Page

  > Home page of web app, the visitor lands on this when visiting the home path (/).

- Login & Sign Up

  > <br>
  > You can login using these dummy credentials.
  >
  > | Email              | Password       |
  > |--------------------|----------------|
  > | admin@test.com     | Admin@123      |
  > | johndoe@test.com   | doeJohn@123    |
  > | alicesnow@test.com | snowAlice@123  |
  >
  > Or you can register a user.
  >
  > Once the user logs in, the user details are saved in the localstorage & can no longer access the login & sign up pages.
  > <br>

- 404 Page

  > <br>
  > The web app has a "page not found" page.
  > The back to home button of this page will redirect based on user login status, if the user is logged in, then they are redirected to the dashboard, else to the home page 
  > <br>

---

## 🧪 E2E Tests
  - Navigations between home page & entry form pages.
  - Login form test cases & form validations.

--- 

## 🌿 Branches
- ### main
  > This branch **should** always be updated with all the completed code from the **dev** & **test** branches.

- ### dev
  > The development branch.
  > Only the development code should exist in this branch.
  > Must **not** merge code from **main** or **test** branches.
  > Create a pull request to **main** from **dev** on completing/updating a feature and _rebase_ it to the **main** branch.
  > Run deployment script only from this branch, when ready to deploy.
  `npm run deploy`

- ### test
  > The testing branch.
  > This branch **should** always be updated with all the code in the **main** branch.
  > Create a pull request to **main** from **test** on completing/updating a test and _rebase_ it to the **main** branch.

<br>