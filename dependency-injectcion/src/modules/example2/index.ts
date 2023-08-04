import {  } from "./repository/IUserRepository";
import { UserRepositoryImpl } from "./repository/implementations/UserRepositoryImpl";
import { CreateUserController } from "./useCases/createUser/UserController";
import { CreateUserUseCase } from "./useCases/createUser/UserUseCase";

const userRepository = new UserRepositoryImpl()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserControllerExample2 = new CreateUserController(createUserUseCase)

export { createUserControllerExample2 }