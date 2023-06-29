import { Fruit, IFruit } from '../entities/Fruit'

export class FruitsRepository {
  async save(props: IFruit): Promise<IFruit> {
    const fruit = new Fruit({
      name: props.name,
      price: props.price,
      quantity: props.quantity,
    })

    await fruit.save()
    return fruit
  }

  async findByName(name: string): Promise<IFruit | null> {
    const fruit = await Fruit.findOne({ name: new RegExp(name, 'i') })
    if (!fruit) return null

    return fruit
  }

  async findById(id: string): Promise<IFruit | null> {
    try {
      const fruit = await Fruit.findById(id)
      return fruit
    } catch {
      return null
    }
  }

  async findAll(): Promise<IFruit[]> {
    const fruit = await Fruit.find()
    return fruit
  }

  async delete(id: string): Promise<void> {
    await Fruit.deleteOne({ _id: id, })
  }

  async changeQuantity(id: string, fruit: IFruit): Promise<void> {
    await Fruit.findByIdAndUpdate(id, fruit)
  }
}
