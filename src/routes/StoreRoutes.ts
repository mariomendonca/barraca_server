import { Router } from 'express'
import { storesRepository } from '..'

export const routes = Router()

routes.get('/store', async (req, res) => {
  const store = await storesRepository.getStore()
  return res.status(200).json(store)
})