import { type UserType } from '../types/user.type'
import knexDb from '../db/knex.db'
import { hashString } from '../utils/string.utils'

const getUser = async (id: string): Promise<UserType> => {
  return knexDb('users').where({ id })
}

const createUser = async (user: UserType): Promise<UserType> => {
  const passwordHash = hashString(user.password as string)
  const userToDb = { ...user, password: passwordHash }
  return knexDb('users').insert(userToDb)
}

const updateUser = async (id: string, patch: Omit<UserType, 'id'>): Promise<string[]> => {
  const userToDb = patch
  if (patch.password != null) {
    userToDb.password = hashString(patch.password)
  }

  return knexDb('users')
    .where({
      id
    })
    .update(userToDb)
}

const deleteUser = async (id: string): Promise<string[]> => {
  return knexDb('users').where({ id }).delete()
}

const getUserByEmail = async (email: string): Promise<UserType> => {
  return knexDb('users')
    .where({
      email
    })
    .first()
}

export default { getUser, createUser, updateUser, deleteUser, getUserByEmail }
