import { Router } from 'express'
import { storesRepository } from '..'
import { authMiddleware } from '../middlewares/authMiddleware'

export const routes = Router()

routes.get('/store', authMiddleware, async (req, res) => {
  const store = await storesRepository.getStore()
  return res.status(200).json(store)
})
