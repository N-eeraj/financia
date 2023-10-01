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

interface PasswordUpdate {
  password: string
  newPassword: string
}

const getCurrentUserIndex = (): number => {
  const { user } = useUserStore()
  const userIndex = usersData.findIndex(({ id }) => user?.id === id)
  if (userIndex === -1) throw 'User Not Found'
  return userIndex
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

export const updateUserDetails = (formData: UpdateDetails): void => {
  const userIndex = getCurrentUserIndex()
  const userDetails = {
    ...usersData[userIndex],
    ...formData,
  }
  usersData[userIndex] = userDetails
  const { setUser } = useUserStore()
  setUser(userDetails)
}

export const updateUserPassword = ({ password, newPassword }: PasswordUpdate) => {
  const userIndex = getCurrentUserIndex()
  const userDetails = usersData[userIndex]
  if (userDetails.password !== password)
    return {
      success: false,
      message: 'Incorrect Password',
    }
  userDetails.password = newPassword
  usersData[userIndex] = userDetails
  return {
    success: true,
    message: 'Successfully Updated Password',
  }
}

export const deleteUser = () => {
  const userIndex = getCurrentUserIndex()
  usersData.splice(userIndex, 1)
}
