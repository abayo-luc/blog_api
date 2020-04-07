import { Router } from 'express';
import PostController from '../controllers/PostController';
const postRouters = Router();
postRouters.get('/posts', PostController.index);
postRouters.get('/posts/:id', PostController.find);
export default postRouters;
