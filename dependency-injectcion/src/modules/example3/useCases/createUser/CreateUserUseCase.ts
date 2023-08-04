import { inject, injectable } from "tsyringe"
import { User } from "../../entities/User"
import { IUserRepository } from "../../repository/IUserRepository"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository)
  {}

  execute(userDTO: UserDTO) {
    const user = new User()
    user.name = userDTO.name
    user.username = userDTO.username
    user.password = userDTO.password

    this.userRepository.createUser(user)
  }
}

export { CreateUserUseCase }