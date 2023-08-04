import { User } from "../../entities/User"
import { UserRepository } from "../../repository/UserRepository"

class CreateUserUseCase {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  execute(userDTO: UserDTO): void {
    const user = new User()
    user.name = userDTO.name
    user.username = userDTO.username
    user.password = userDTO.password

    this.userRepository.createUser(user)
  }
}

export { CreateUserUseCase }