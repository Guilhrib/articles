import { container } from "tsyringe";
import { IUserRepository } from "../../modules/example3/repository/IUserRepository";
import { UserRepositoryImpl } from "../../modules/example3/repository/implementations/UserRepositoryImpl";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepositoryImpl
)