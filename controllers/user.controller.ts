import { type UserType } from '../types/user.type'
import userDao from '../daos/user.dao'

const getUser = async (payload: UserType): Promise<UserType> => {
  return await userDao.getUser(payload.id as string)
}

const createUser = async (payload: UserType): Promise<UserType> => {
  const user = {
    email: payload.email, password: payload.password
  }

  return await userDao.createUser(user)
}

const updateUser = async (payload: UserType): Promise<string[]> => {
  const id = payload.id as string
  const user = {
    email: payload.email, password: payload.password
  }

  return await userDao.updateUser(id, user)
}

const deleteUser = async (payload: UserType): Promise<string[]> => {
  return await userDao.deleteUser(payload.id as string)
}

export default { getUser, createUser, updateUser, deleteUser }
