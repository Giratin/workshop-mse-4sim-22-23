import Reservation from "../models/reservation.js";
import Parking from "../models/parking.js";


export const addReservation = async (req, res) => {
    const { clientId, parkingId } = req.params;

    try {

        const parking = await Parking.findById(parkingId);
        if (parking.nbFreePlaces < 1) {
            return res.status(403).end("nbFree places insuff")
        }

        parking.nbFreePlaces--;
        await parking.save();

        const reservation = new Reservation({
            clientId,
            parkingId
        });

        await reservation.save()
        res.status(200).json(reservation)

    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}

export const getClientReservations = async (req, res) => {
    const { clientId } = req.params;

    try {
        const reservations = await Reservation.find({ clientId });
        res.status(200).json(reservations)

    } catch (e) {
        console.log(e);
        res.status(500).end("Internal Server Error")
    }
}