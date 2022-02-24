import express from 'express';

import { getAll, addOnce, getOnce,
  putAll, patchOnce, deleteOnce } from '../controllers/game.js';

const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(addOnce);

router
  .route('/:name')
  .get(getOnce)
  .put(putAll)
  .patch(patchOnce)
  .delete(deleteOnce);

export default router;