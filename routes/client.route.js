import { Router } from "express";
import { signIn, signUp } from "../controllers/client.controller.js";
import { body } from "express-validator";
import multerConfig from "../middlewares/multer-config.js";

const router = Router();


router.post("/signup",
    multerConfig("image"),
    body("firstName").isLength({ min: 3, max: 30 }),
    body("lastName").isLength({ min: 3, max: 30 }),
    body("password").isLength({ min: 3, max: 30 }),
    body("phone").isNumeric().isLength({ min: 8, max: 8 }),
    signUp
)

router.post("/signin",
    body("password").isLength({ min: 3, max: 30 }),
    body("phone").isNumeric().isLength({ min: 8, max: 8 }),
    signIn
)

export default router;