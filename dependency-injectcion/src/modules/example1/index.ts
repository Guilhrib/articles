import { UserRepository } from "./repository/UserRepository";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { CreateUserUseCase } from "./useCases/createUser/CreateUserUseCase";

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserControllerExample1 = new CreateUserController(createUserUseCase)

export { createUserControllerExample1 }