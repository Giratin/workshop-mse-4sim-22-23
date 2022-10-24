import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { getAll, addOnce, getOnce, putOnce } from "../controllers/game.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    multer("image", 5 * 1024 * 1024),
    body("title").isLength({ min: 5 }),
    body("description").isLength({ min: 5 }),
    body("price").isNumeric(),
    body("quantity").isNumeric(),
    addOnce
  );

router
  .route("/:id")
  .get(getOnce)
  .put(
    multer("image", 5 * 1024 * 1024),
    body("title").isLength({ min: 5 }),
    body("description").isLength({ min: 5 }),
    body("price").isNumeric(),
    body("quantity").isNumeric(),
    putOnce
  );

export default router;
