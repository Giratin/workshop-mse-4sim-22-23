import express from 'express';
import { body } from 'express-validator'; // Importer express-validator

import { getAll, addOnce, getOnce,
  putAll, patchOnce, deleteOnce } from '../controllers/game.js';
import multer from '../middlewares/multer-config.js'; // Importer la configuration de multer

const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(
    multer, // Utiliser multer
    body('name').isLength({ min: 5 }), // Le nom doit comporter au moins 5 caractères
    body('year').isNumeric(), // La date doit etre composée de chiffres
    addOnce);

router
  .route('/:name')
  .get(getOnce)
  .put(putAll)
  .patch(patchOnce)
  .delete(deleteOnce);

export default router;