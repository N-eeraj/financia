const regex = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/,
  digit: /\d/,
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
}

// helper function to structure validation errors
const validationError = (message: string) => {
  return {
    error: true,
    message,
  }
}

// function to trigger validation of a object of refs & return if all of them are valid
export const validateForm = (formInputRefs: object) => {
  const inputFields = Object.values(formInputRefs)
  inputFields.forEach(input => input.validate())
  return inputFields.every(input => input.isValid)
}

export const requiredValidation = (value: string) => {
  if (!value)
    return validationError('This field is required')

  return { error: false }
}

export const nameValidation = (name: string) => {
  const required = requiredValidation(name)
  if (required.error)
    return required

  if (name.length === 1)
    return validationError('Name must be atleast 2 characters long')

  return { error: false }
}

export const emailValidation = (email: string) => {
  const required = requiredValidation(email)
  if (required.error)
    return required

    if (!regex.email.test(email))
      return validationError('Please enter a valid email')

  return { error: false }
}

export const passwordValidation = (password: string) => {
  const required = requiredValidation(password)
  if (required.error)
    return required

  if (password.length < 8)
    return validationError('Password must be atleast 8 characters')
  if (!regex.digit.test(password))
    return validationError('Password must include atleast 1 number')
  if (!regex.lowercase.test(password))
    return validationError('Password must include atleast 1 lowercase')
  if (!regex.uppercase.test(password))
    return validationError('Password must include atleast 1 uppercase')

  return { error: false }
}

export const confirmValidation = (original: string, confirmation: string, field = 'fields') => {
  if (original !== confirmation)
    return validationError(`The ${field} doesn\'t match`)

  return { error: false }
}