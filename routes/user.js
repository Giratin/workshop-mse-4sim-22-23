import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { signin, signup, putOnce } from "../controllers/user.js";

const router = express.Router();

router
  .route("/signup")
  .post(
    multer("avatar", 512 * 1024),
    body("username").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
    body("wallet").isNumeric(),
    signup
  );

router.route("/signin").post(signin);

router
  .route("/:id")
  .put(
    multer("avatar", 512 * 1024),
    body("username").isLength({ min: 5 }),
    body("username").isLength({ min: 5 }),
    body("wallet").isNumeric(),
    putOnce
  );

export default router;
