import Game from "../models/game.js";

export function getAll(req, res) {
  Game.find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          id: docs[i]._id,
          title: docs[i].title,
          price: docs[i].price,
        });
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addOnce(req, res) {
  Game.create(req.body)
    .then((newGame) => {
      res.status(200).json({
        title: newGame.title,
        description: newGame.description,
        price: newGame.price,
        quantity: newGame.quantity,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getOnce(req, res) {
  Game.findById(req.params.id)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putOnce(req, res) {
  Game.findByIdAndUpdate(req.params.id, req.body)
    .then((doc1) => {
      Game.findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
