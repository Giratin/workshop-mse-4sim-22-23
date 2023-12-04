import {Schema , model, Types } from "mongoose";

const reservationSchema = new Schema(
    {
        clientId: {
            type: Types.ObjectId,
            ref: "client"
        },
        parkingId: {
            type: Types.ObjectId,
            ref: "parking"
        },
        date: {
            type: Date,
            default: new Date()
        }
    }
);


export default model("reservation", reservationSchema);