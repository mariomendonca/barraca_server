import { Fruit, IFruit } from '../entities/Fruit'

export class FruitsRepository {
  async save(props: IFruit): Promise<IFruit> {
    console.log(props)
    const fruit = new Fruit({
      name: props.name,
      price: props.price,
      quantity: props.quantity,
    })

    await fruit.save()
    return fruit
  }

  async findByName(name: string): Promise<IFruit | null> {
    const fruit = await Fruit.findOne({ name })
    if (!fruit) return null

    return fruit
  }

  async findAll(): Promise<IFruit[]> {
    const fruit = await Fruit.find()
    return fruit
  }
}