import { Router } from 'express';
import UserController from '../controllers/UserController';
const userRouters = Router();
userRouters.get('/users', UserController.index);
userRouters.get('/users/:id', UserController.find);
export default userRouters;
