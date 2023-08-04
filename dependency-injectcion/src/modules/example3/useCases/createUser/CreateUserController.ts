import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  handle(request: Request, response: Response): Response {
    const { name, username, password } = request.body

    const cretaeUserUseCase = container.resolve(CreateUserUseCase)
    cretaeUserUseCase.execute({ name, username, password })

    return response.status(201).send()
  }
}

export { CreateUserController }