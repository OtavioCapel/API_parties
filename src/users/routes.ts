import { Router } from 'express';
import UserController from './user.controller';

const routes = Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser);
routes.get('/users/:id', UserController.getUserById);
routes.delete('/users/:id', UserController.deleteUserById);
routes.put('/users', UserController.updateUser);

export default routes;