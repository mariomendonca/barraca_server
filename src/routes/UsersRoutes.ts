import { Router } from 'express'
import { usersService } from '..'

export const routes = Router()

routes.post('/users', async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await usersService.create(name, email, password)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(400).send()
  }
})

routes.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await usersService.login(email, password)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).send()
  }
})
