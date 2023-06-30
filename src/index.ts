import { FruitsRepository } from './repositories/FruitsRepository'
import { StoreRepository } from './repositories/StoreRepository'
import { FruitsService } from './services/FruitsService'
import { StoresService } from './services/StoresService'

export const fruitsRepository = new FruitsRepository()
export const fruitsService = new FruitsService(fruitsRepository)
export const storesRepository = new StoreRepository()
export const storesService = new StoresService(storesRepository)