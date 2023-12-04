import {Schema , model} from "mongoose";

const clientSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        password: String,
        phone: {
            type: Number,
            unique: true
        },
        image: String
    }
);


export default model("client", clientSchema);