import User from "../models/user.js";

export function signin(req, res) {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function signup(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    wallet: req.body.wallet,
    avatar: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
  })
    .then((newUser) => {
      res.status(200).json({
        username: newUser.username,
        password: newUser.password,
        wallet: newUser.wallet,
        avatar: newUser.avatar,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putOnce(req, res) {
  let newUser = {};
  if(req.file == undefined) {
    newUser = {
      username: req.body.username,
      password: req.body.password,
      wallet: req.body.wallet
    }
  }
  else {
    newUser = {
      username: req.body.username,
      password: req.body.password,
      wallet: req.body.wallet,
      avatar: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`
    }
  }
  User.findByIdAndUpdate(req.params.id, newUser)
    .then((doc1) => {
      User.findById(req.params.id)
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