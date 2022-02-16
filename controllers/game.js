import Game from '../models/game.js';

const games = [new Game("dmc5", 2019), new Game("re8", 2021), new Game("nfs", 2019)];

export function getAll(req, res) {
    res.status(200).json(games);
}

export function addOnce(req, res) {
    const game = new Game(req.body.name, req.body.year);
    games.push(game);
    res.status(201).json({ message: "Created !", entity: game});
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val => val.name === req.params.name));
}

export function putOnce(req, res) {
    res.status(200).json({ message: "Updated !", name: req.params.name});
}

export function patchOnce(req, res) {
    res.status(200).json({ message: "Updated !", name: req.params.name});
}

export function deleteOnce(req, res) {
    res.status(200).json({ message: "Deleted !", name: req.params.name});
}