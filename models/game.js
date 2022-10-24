import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const gameSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        // Ajout de l'attribut image
        image: {
            type: String,
            required: true
        },
        onSale: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Game', gameSchema);