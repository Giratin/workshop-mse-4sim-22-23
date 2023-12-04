import { validationResult } from "express-validator";
import Parking from "../models/parking.js";

export const addParking = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    try {
        const parking = new Parking(req.body);
        parking.nbFreePlaces = parking.nbPlaces;

        await parking.save();
        res.status(201).json(parking)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}

export const getParkings = async (req, res) => {
    try {
        const parkings = await Parking.find()
            .where("nbFreePlaces").gt(0)
            .select("_id name state nbFreePlaces")
            .exec();

        res.status(200).json(parkings)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}
export const getParkingById = async (req, res) => {
    try {
        const { id } = req.params;

        const parking = await Parking.findById(id);

        res.status(200).json(parking)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}


export const patchParkingById = async (req, res) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    
    try {
        const { id } = req.params;

        const parking = await Parking.findByIdAndUpdate(id, { name: req.body.name }, { new: true });

        res.status(200).json(parking)
    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}
