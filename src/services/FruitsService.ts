import { FruitsRepository } from '../repositories/FruitsRepository'

export class FruitsService {
  constructor(
    private fruitsRepository: FruitsRepository
  ) { }

  async create(name: string, price: number, quantity: number) {
    const fruit = await this.fruitsRepository.findByName(name)

    if (fruit) {
      throw new Error("already exists a fruit with this name")
    }

    const newFruit = await this.fruitsRepository.save({ name, price, quantity })
    return newFruit
  }

  async getByName(name: string) {
    const fruit = await this.fruitsRepository.findByName(name)
    if (!fruit) {
      throw new Error("fruit not found")
    }

    return fruit
  }

  async getById(id: string) {
    const fruit = await this.fruitsRepository.findById(id)
    if (!fruit) {
      throw new Error("fruit not found")
    }

    return fruit
  }

  async delete(id: string) {
    const fruit = await this.fruitsRepository.findById(id)
    if (!fruit) {
      throw new Error("fruit not found")
    }

    await this.fruitsRepository.delete(id)
  }

  async addQuantity(id: string, quantity: number) {
    const fruit = await this.getById(id)

    fruit.quantity += quantity
    await this.fruitsRepository.changeQuantity(id, fruit)
  }

  async removeQuantity(id: string, quantity: number) {
    const fruit = await this.getById(id)

    if (quantity > fruit.quantity) {
      throw new Error("quantity not enough")
    }

    fruit.quantity -= quantity
    await this.fruitsRepository.changeQuantity(id, fruit)
  }
}