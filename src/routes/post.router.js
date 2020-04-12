import { Router } from 'express';
import PostController from '../controllers/PostController';
import CategoryController from '../controllers/CategoryController';

const postRouters = Router();
postRouters.get('/posts', PostController.index);
postRouters.get('/posts/:id', PostController.find);
postRouters.post('/posts/:id/views', PostController.addView);
postRouters.get('/categories', CategoryController.index);
export default postRouters;
