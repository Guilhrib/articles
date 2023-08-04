import { User } from "../entities/User"

class UserRepository {
  createUser(user: User): void {
    console.log('User created: ')
    console.table(user)
  }
}

export { UserRepository }