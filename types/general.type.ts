import { type UserType } from './user.type'

export type UnknownObject = Record<string, unknown>

export type RequestResult = UserType | string[]

export type MyFunction = (payload: UnknownObject) => Promise<RequestResult>

export type PromiseRecord = Promise<RequestResult>
