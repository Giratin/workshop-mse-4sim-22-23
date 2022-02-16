import Achat from '../models/achat.js';

import { games } from './game.js';
import { users } from './user.js';

export const achats = [];
var id = 1;

export function buyGame(req, res) {
    const game = games.find(val => val.id == req.params.idUser);
    const user = users.find(val => val.id == req.params.idGame);

    if(game.quantity > 0 && user.wallet >= game.price) {
        const achat = new Achat(id, Date.now());
        achats.push(achat);
        id++;
        game.quantity--;
        user.wallet -= game.price;
        res.status(201).json(achat);
    }
    else {
        res.status(200).json({ message : "Can't buy this game !"});
    }
}