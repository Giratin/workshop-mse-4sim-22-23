import { Router } from "express";
import { addReservation, getClientReservations } from "../controllers/reservation.controller.js";

const router = Router();
router.get("/:clientId/:parkingId", addReservation)
router.get("/:clientId/", getClientReservations)


export default router;