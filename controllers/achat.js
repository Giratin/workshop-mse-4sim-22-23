import Achat from "../models/achat.js";
import Game from "../models/game.js";
import User from "../models/user.js";

export function buyGame(req, res) {
  Game.findById(req.params.idGame)
    .then((game) => {
      if (game.quantity > 0) {
        User.findById(req.params.idUser)
          .then((user) => {
            if (user.wallet >= game.price) {
              Achat.create({
                idUser: req.params.idUser,
                idGame: req.params.idGame,
              })
                .then((achat) => {
                  Game.findByIdAndUpdate(req.params.idGame, {
                    quantity: game.quantity - 1,
                  })
                    .then((doc1) => {
                      User.findByIdAndUpdate(req.params.idUser, {
                        wallet: user.wallet - game.price,
                      })
                        .then((doc2) => {
                          res.status(200).json(achat);
                        })
                        .catch((err) => {
                          res.status(500).json({ error: err });
                        });
                    })
                    .catch((err) => {
                      res.status(500).json({ error: err });
                    });
                })
                .catch((err) => {
                  res.status(500).json({ error: err });
                });
            } else {
              res.status(200).json({ message: "Not enough cash !" });
            }
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      } else {
        res.status(200).json({ message: "Game not available !" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
