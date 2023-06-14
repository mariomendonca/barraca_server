import { FruitsRepository } from './repositories/FruitsRepository'
import { FruitsService } from './services/FruitsService'

export const fruitsRepository = new FruitsRepository()
export const fruitsService = new FruitsService(fruitsRepository)