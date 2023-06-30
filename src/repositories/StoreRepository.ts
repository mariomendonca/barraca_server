import { IStore, Store } from '../entities/Store'

export class StoreRepository {
  async save(): Promise<IStore> {
    const store = await new Store({
      name: 'barraca do tinoco',
      revenue: 0
    })

    await store.save()
    return store
  }

  async getStore(): Promise<IStore | null> {
    const store = await Store.findOne({ name: 'barraca do tinoco' })
    return store
  }

  async sellProduct(store: IStore) {
    await Store.findOneAndUpdate({ name: 'barraca do tinoco' }, store)
  }
}
