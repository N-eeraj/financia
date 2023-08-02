import usersData from '@/data/users.json'

interface LoginForm {
  email: string
  password: string
}

export const validateUserLogin = ({ email, password }: LoginForm) => {
  for (let user of usersData) {
    if (user.email !== email)
      continue
    if (user.password === password)
      return user
    else
      throw 'Incorrect Passsword'
  }
  throw 'User Not Found'
}