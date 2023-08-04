import { User } from "../entities/User"

interface IUserRepository {
  createUser(user: User): void
}

export { IUserRepository }