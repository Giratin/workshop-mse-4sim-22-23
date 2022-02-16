import express from 'express';

import { buyGame } from '../controllers/achat.js';
  
const router = express.Router();

router
  .route('/:idUser/:idGame')
  .get(buyGame);
  
export default router;