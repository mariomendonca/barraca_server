import jwt from 'jsonwebtoken'
import { UserRepository } from '../repositories/UserRepository'

export class UsersService {
  constructor(
    private usersRepository: UserRepository
  ) { }

  async create(name: string, email: string, password: string) {
    const user = await this.usersRepository.save({
      email,
      name,
      password
    })

    return user
  }

  async login(email: string, password: string) {
    const user = await this.usersRepository.getByEmailAndPassword(email, password)
    if (!user) {
      throw new Error("worng credentials")
    }

    const token = jwt.sign({ id: user.email }, 'secret')
    return {
      user,
      token
    }
  }
}
