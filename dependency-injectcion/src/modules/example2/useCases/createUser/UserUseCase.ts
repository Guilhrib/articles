import { User } from "../../entities/User"
import { IUserRepository } from "../../repository/IUserRepository"

class CreateUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  execute(userDTO: UserDTO) {
    const user = new User()
    user.name = userDTO.name
    user.username = userDTO.username
    user.password = userDTO.password

    this.userRepository.createUser(user)
  }
}

export { CreateUserUseCase }