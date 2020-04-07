import { Router } from 'express';
import CommentController from '../controllers/CommentController';
const commentRouters = Router();
commentRouters.get('/posts/:postId/comments', CommentController.index);
commentRouters.post('/posts/:postId/comments', CommentController.create);
export default commentRouters;
