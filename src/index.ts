import { FruitsRepository } from './repositories/FruitsRepository'
import { StoreRepository } from './repositories/StoreRepository'
import { UserRepository } from './repositories/UserRepository'
import { FruitsService } from './services/FruitsService'
import { StoresService } from './services/StoresService'
import { UsersService } from './services/UsersService'

export const fruitsRepository = new FruitsRepository()
export const fruitsService = new FruitsService(fruitsRepository)

export const storesRepository = new StoreRepository()
export const storesService = new StoresService(storesRepository)

export const usersRepository = new UserRepository()
export const usersService = new UsersService(usersRepository)