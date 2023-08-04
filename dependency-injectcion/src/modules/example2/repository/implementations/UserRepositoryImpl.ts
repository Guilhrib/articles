import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryImpl implements IUserRepository {
  createUser(user: User): void {
    console.log('User created: ')
    console.table(user)
  }
}

export { UserRepositoryImpl }