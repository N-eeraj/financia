import usersData from '@/data/users.json'

interface LoginForm {
  email: string
  password: string
}

interface SignUpForm {
  name: string
  email: string
  password: string
}

export const validateUserLogin = ({ email, password }: LoginForm) => {
  for (let user of usersData) {
    if (user.email !== email)
      continue
    if (user.password === password) {
      const { password, ...userDetails } = user
      return userDetails
    }
    else
      throw 'Incorrect Passsword'
  }
  throw 'User Not Found'
}

export const validateUserSignUp = ({ name, email, password }: SignUpForm) => {
  if (usersData.some(user => user.email === email))
    throw 'Email id already exists'
  const userDetails = {
    id: ++usersData[usersData.length - 1].id,
    name,
    email,
  }
  usersData.push({ ...userDetails, password })
  return userDetails
}