import { Router } from 'express'
import { fruitsRepository, fruitsService, storesService } from '..'
import { authMiddleware } from '../middlewares/authMiddleware'

export const routes = Router()

routes.get('/fruits/:name', authMiddleware, async (req, res) => {
  const { name } = req.params

  try {
    const fruit = await fruitsService.getByName(name)
    return res.status(200).json(fruit)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }
  }
})

routes.get('/fruits/id/:id', authMiddleware, async (req, res) => {
  const { id } = req.params

  try {
    const fruit = await fruitsService.getById(id)
    return res.status(200).json(fruit)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }
  }
})

routes.get('/fruits', authMiddleware, async (req, res) => {
  try {
    const fruits = await fruitsRepository.findAll()
    return res.status(200).json(fruits)
  } catch (error) {
    return res.status(400).send(error)
  }
})

routes.post('/fruits', authMiddleware, async (req, res) => {
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

routes.put('/fruits/add/:id', authMiddleware, async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body

  try {
    await fruitsService.addQuantity(id, quantity)
    return res.status(200).send()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }

  }
})
routes.put('/fruits/sell/:id', authMiddleware, async (req, res) => {
  const { id } = req.params
  const { quantity } = req.body

  try {
    const fruit = await fruitsService.removeQuantity(id, quantity)
    await storesService.sellProduct(fruit.price * quantity)
    return res.status(200).send()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }

  }
})

routes.delete('/fruits/:id', authMiddleware, async (req, res) => {
  const { id } = req.params

  try {
    await fruitsService.delete(id)
    return res.status(200).send()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message })
    } else {
      return res.status(400).send({ error: 'Unexpected error' })
    }
  }
})
