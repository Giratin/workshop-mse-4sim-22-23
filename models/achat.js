import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const achatSchema = new Schema(
    {
        idUser: {
            type: String,
            required: true
        },
        idGame: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Achat', achatSchema);