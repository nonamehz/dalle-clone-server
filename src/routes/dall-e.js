import { Router } from 'express';
import { createImage } from '../controllers/dall-e.js';


const router = Router();

router.post('/', createImage);


export default router;