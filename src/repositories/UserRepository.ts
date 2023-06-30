import bcrypt from 'bcryptjs'
import { IUser, User } from '../entities/User'

export class UserRepository {
  async save(props: IUser) {
    const user = new User({
      email: props.email,
      name: props.name,
      password: bcrypt.hashSync(props.password, 8)
    })

    await user.save()
    return user
  }

  async getByEmailAndPassword(email: string, password: string): Promise<IUser | null> {
    const user = await User.findOne({ email })


    if (!user) {
      return null
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      console.log('error')
      return null
    }

    return user
  }
}
