import { Router } from 'express'

export const routes = Router()

routes.get('/store', (req, res) => {
  console.log('store')
})