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
}