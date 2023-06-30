import { IUser, User } from '../entities/User'

export class UserRepository {
  async save(props: IUser) {
    const user = new User({
      email: props.email,
      name: props.name,
      password: props.password
    })

    await user.save()
    return user
  }

  async getByEmailAndPassword(email: string, password: string): Promise<IUser | null> {
    const user = User.findOne({ email: email, password: password })
    if (!user) {
      return null
    }
    return user
  }
}
