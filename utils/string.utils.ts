import bcrypt from 'bcrypt'

export const hashString = (string: string): string => {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  return bcrypt.hashSync(string, salt)
}

export const isStringHashEqual = (string: string, hash: string): boolean => {
  return bcrypt.compareSync(string, hash)
}
