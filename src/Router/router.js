import cors from 'cors'
import Router from 'express';

import PostController from '../Controller/PostController.js';

const router = new Router();

router.post('/create', cors(),  PostController.create)
router.get('/get', cors(), PostController.getAll)
router.patch('/update', cors(), PostController.update)

export default router;