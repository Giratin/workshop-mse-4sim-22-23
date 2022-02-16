import express from 'express';

import { signin, signup, putOnce } from '../controllers/user.js';
  
const router = express.Router();

router
  .route('/signin')
  .post(signin);

router
  .route('/signup')
  .post(signup);

router
  .route('/:id')
  .put(putOnce);
  
export default router;