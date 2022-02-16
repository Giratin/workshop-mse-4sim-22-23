import Game from '../models/game.js';

export const games = [];
var id = 1;

export function getAll(req, res) {
    let list = [];
    for(let i = 0; i < games.length; i++) {
        list.push({
            id: games[i].id,
            title: games[i].title,
            price: games[i].price,
        });
    }
    res.status(200).json(list);
}

export function addOnce(req, res) {
    const game = new Game(id, req.body.title, req.body.description,
        req.body.price, req.body.quantity);
    games.push(game);
    id++;
    res.status(201).json({
        title: game.title,
        description: game.description,
        price: game.price,
        quantity: game.quantity
    });
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val => val.id == req.params.id));
}

export function putOnce(req, res) {
    const game = games.find(val => val.id == req.params.id);
    game.title = req.body.title;
    game.description = req.body.description;
    game.price = req.body.price;
    game.quantity = req.body.quantity;
    res.status(200).json(game);
}