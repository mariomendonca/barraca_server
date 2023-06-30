import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).send()
  }
  const token = authorization.replace('Bearer', '').trim()

  try {
    jwt.verify(token, 'secret')
    return next()
  } catch (error) {
    return res.status(401).send()
  }

}