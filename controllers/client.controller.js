import { validationResult } from "express-validator";
import Client from "../models/client.js";

export const signUp = async (req, res) => {
    if(!validationResult(req).isEmpty()){
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    try{
        const client = new Client(req.body);
        client.image = `http://localhost:9090/img/${req.file.filename}`;
        await client.save();
        res.status(201).json(client)
    }catch(e){
        console.log(e);
        res.status(500).end("Internal Server Error")
    }

}
export const signIn = async (req, res) => {
    if(!validationResult(req).isEmpty()){
        return res.status(400).json({
            validationError: validationResult(req).array()
        });
    }
    try{
        const client = await Client.findOne({ 
            phone: req.body.phone,
            password: req.body.password
        });

        if(!client){
            return res.status(403).json({
                message: "not found"
            })
        }

        res.status(200).json(client)
        
    }catch(e){
        console.log(e);
        res.status(500).end("Internal Server Error")
    }

}