import { type UserType } from '../types/user.type'
import userDao from '../daos/user.dao'
import { isStringHashEqual } from '../utils/string.utils'

export const authenticateUser = async (payload: UserType): Promise<boolean> => {
  const user = await userDao.getUserByEmail(payload.email as string)
  return isStringHashEqual(payload.password as string, user.password as string)
}

export default { authenticateUser }
