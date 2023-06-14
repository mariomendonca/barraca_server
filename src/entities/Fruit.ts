import mongoose from 'mongoose'

export interface IFruit {
  name: string
  price: number
  quantity: number
}

const FruitSchema = new mongoose.Schema<IFruit>({
  name: String,
  price: Number,
  quantity: Number,
})

export const Fruit = mongoose.model('Fruit', FruitSchema)
