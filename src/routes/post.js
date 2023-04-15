import { Router } from 'express';
import { getAllPosts, insertPost } from '../controllers/post.js';


const router = Router();

router.get('/', getAllPosts);
router.post('/', insertPost);


export default router;