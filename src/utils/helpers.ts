export const isValidName = (value: string) => {
  const pattern = /\d+/g
  const pattern2 = /[!@#\$%\^\&*\)\(+=._-]/g
  return !(pattern.test(value) || pattern2.test(value))
}

export const isValidString = (value: string) => {
  const pattern = /\d+/g
  return !pattern.test(value)
}

export const isValidEmail = (value: string) => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  return pattern.test(value)
}

export const isValidPhoneNumber = (value: string) => {
  const pattern = /[a-zA-Z]+/g
  const pattern2 = /^[0-9]{1,10}$/g
  return {
    valid: !pattern.test(value),
    limit: !pattern2.test(value)
  }
}

export const isValidNumerical = (value: string) => {
  const pattern = /[a-zA-Z]+/g
  return !pattern.test(value)
}