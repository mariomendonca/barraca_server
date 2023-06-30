import { StoreRepository } from '../repositories/StoreRepository'

export class StoresService {
  constructor(private storesRepository: StoreRepository) { }

  async sellProduct(price: number) {
    const store = await this.storesRepository.getStore()

    if (store) {
      store.revenue += price
      await this.storesRepository.sellProduct(store)
    }
  }
}
