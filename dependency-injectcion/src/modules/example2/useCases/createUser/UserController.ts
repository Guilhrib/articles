import { Request, Response } from "express";
import { CreateUserUseCase } from "./UserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase

  constructor(userUseCase: CreateUserUseCase) {
    this.createUserUseCase = userUseCase
  }

  handle(request: Request, response: Response): Response {
    const { name, username, password } = request.body

    this.createUserUseCase.execute({ name, username, password })

    return response.status(201).send()
  }
}

export { CreateUserController }