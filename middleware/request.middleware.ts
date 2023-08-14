import { type Response, type NextFunction, type Request } from 'express'
import { type MyFunction, type RequestResult } from '../types/general.type'

const requestMiddleware = (fn: MyFunction) => (req: Request, res: Response, next: NextFunction): any => {
  const payload = { ...req.body, ...req.params }
  fn(payload)
    .then((result: RequestResult) => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
}

export default requestMiddleware
