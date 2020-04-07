import { Router } from 'express';
import postRouters from './post.router';
import userRouters from './user.routers';
import commentRouters from './comment.router';
const routers = Router();

routers.use('/api/v1', postRouters, userRouters, commentRouters);

export default routers;
