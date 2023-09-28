import usersData from '@/data/users.json'

interface LoginDetails {
  email: string
  password: string
}

interface SignUpDetails {
  name: string
  email: string
  password: string
}

export const validateUserLogin = ({ email, password }: LoginDetails) => {
  for (let user of usersData) {
    if (user.email.toLocaleLowerCase() !== email.toLocaleLowerCase())
      continue
    if (user.password === password) {
      const { password, ...userDetails } = user
      return userDetails
    }
    else
      throw 'Incorrect Password'
  }
  throw 'User Not Found'
}

export const validateUserSignUp = ({ name, email, password }: SignUpDetails) => {
  if (usersData.some(user => user.email.toLocaleLowerCase() === email.toLocaleLowerCase()))
    throw 'Email id already exists'
  const userDetails = {
    id: ++usersData[usersData.length - 1].id,
    name,
    email,
  }
  usersData.push({ ...userDetails, password })
  return userDetails
}
