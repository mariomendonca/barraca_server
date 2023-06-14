import { Router } from 'express'
import { fruitsRepository, fruitsService } from '..'

export const routes = Router()

routes.get('/fruits/:name', async (req, res) => {
  const { name } = req.params

  try {
    const fruit = await fruitsRepository.findByName(name)
    return res.status(200).json(fruit)
  } catch (error) {
    return res.status(400).send(error)
  }
})

routes.get('/fruits', async (req, res) => {
  try {
    const fruits = await fruitsRepository.findAll()
    return res.status(200).json(fruits)
  } catch (error) {
    return res.status(400).send(error)
  }
})

routes.post('/fruits', async (req, res) => {
  const { name, quantity, price } = req.body

  try {
    const fruit = await fruitsService.create(name, price, quantity)
    return res.status(201).json(fruit)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }
  }
})
