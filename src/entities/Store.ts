import mongoose from 'mongoose'

export interface IStore {
  name: string
  revenue: number
}

const StoreSchema = new mongoose.Schema<IStore>({
  name: String,
  revenue: Number,
})

export const Store = mongoose.model('Store', StoreSchema)
