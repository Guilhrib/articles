import { Router } from "express";
import { createUserControllerExample1 } from "./modules/example1";
import { createUserControllerExample2 } from "./modules/example2";
import { CreateUserController } from "./modules/example3/useCases/createUser/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.post('/users/example-1', (req, res) => createUserControllerExample1.handle(req, res))
router.post('/users/example-2', (req, res) => createUserControllerExample2.handle(req, res))
router.post('/users/example-3', createUserController.handle)

export { router }