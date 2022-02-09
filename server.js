import express from 'express';
import { readFile } from 'fs';
import { join, dirname } from 'path';
import {fileURLToPath} from 'url';

const app = express();

const port = process.env.PORT || 9090;

class Game {
  constructor(name, year, url) {
    this.name = name;
    this.year = year;
    this.url = url;
  }
}

app.get('/game', (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
    if(!err) {
      const list = JSON.parse(data);
      let games = [];
      for(let i = 0; i < list.length; i++) {
        games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
      }
      res.status(200).json(games);
    }else {
      res.status(404).json({ error : err });
    }
  });
});

app.get('/game/select/:year', (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
    if(!err) {
      const list = JSON.parse(data);
      let games = [];
      for(let i = 0; i < list.length; i++) {
        games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
      }
      res.status(200).json(games.filter(val => val.year > req.params.year));
    }else {
      res.status(404).json({ error : err });
    }
  });
});

app.get('/game/:name', (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  readFile(join(__dirname, 'SteamGames.json'), function(err, data) {
    if(!err) {
      const list = JSON.parse(data);
      let games = [];
      for(let i = 0; i < list.length; i++) {
        games.push(new Game(list[i].Game, list[i].Year, list[i].GameLink));
      }
      res.status(200).json({ url : games.find(val => val.name == req.params.name).url });
    }else {
      res.status(404).json({ error : err });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});