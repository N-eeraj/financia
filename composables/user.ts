import { useUserStore } from '@/stores/user'

import usersData from '@/data/users.json'

interface UserDetails {
  id: number
  name: string
  email: string
  phone?: string
  profilePicture?: string
}

interface LoginDetails {
  email: string
  password: string
}

interface SignUpDetails {
  name: string
  email: string
  password: string
}

interface UpdateDetails {
  name: string
  email: string
  phone: string
  profilePicture: string
}

export const validateUserLogin = ({ email, password }: LoginDetails): UserDetails  => {
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

export const validateUserSignUp = ({ name, email, password }: SignUpDetails): UserDetails => {
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

export const updateUser = (formData: UpdateDetails): void => {
  const { user, setUser } = useUserStore()
  const userIndex = usersData.findIndex(({ id }) => user?.id === id)
  if (userIndex === -1) throw 'User Not Found'
  let userDetails = usersData[userIndex]
  userDetails = {
    ...userDetails,
    ...formData,
  }
  usersData[userIndex] = userDetails
  setUser(userDetails)
}
