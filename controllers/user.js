import User from '../models/user.js';

export const users = [];
var id = 1;

export function signin(req, res) {
    res.status(200).json(users.find(val => val.username == req.body.username && val.password == req.body.password));
}

export function signup(req, res) {
    const user = new User(id, req.body.username,
        req.body.password, req.body.wallet);
    users.push(user);
    id++;
    res.status(201).json({
        username: user.username,
        password: user.password,
        wallet: user.wallet
    });
}

export function putOnce(req, res) {
    const user = users.find(val => val.id == req.params.id);
    user.username = req.body.username;
    user.password = req.body.password;
    user.wallet = req.body.wallet;
    res.status(200).json(user);
}