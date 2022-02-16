import express from 'express';

import { getAll, addOnce, getOnce, putOnce } from '../controllers/game.js';
  
const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(addOnce);

router
  .route('/:id')
  .get(getOnce)
  .put(putOnce);
  
export default router;