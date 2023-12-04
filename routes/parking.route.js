import { Router } from "express";
import { addParking, getParkingById, getParkings, patchParkingById } from "../controllers/parking.controller.js";
import { body } from "express-validator";

const router = Router();


router.post("/",
    body("name").isLength({ min: 5 }),
    body("state").isLength({ min: 5 }),
    body("nbPlaces").isNumeric(),
    addParking);

router.get("/", getParkings)
router.get("/:id", getParkingById)
router.patch("/:id",
    body("name").isLength({ min: 5 }),
    patchParkingById)


export default router;