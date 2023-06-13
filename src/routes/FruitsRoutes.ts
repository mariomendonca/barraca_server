import { Router } from 'express'

export const routes = Router()

routes.get('/fruits', (req, res) => {
  console.log('aaaaa')
})
