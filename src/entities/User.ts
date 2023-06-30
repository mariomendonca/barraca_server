import mongoose from 'mongoose'

export interface IUser {
  email: string
  name: string
  password: string
}

const UserSchema = new mongoose.Schema<IUser>({
  email: { type: String, unique: true },
  name: String,
  password: String
})

export const User = mongoose.model('User', UserSchema)
