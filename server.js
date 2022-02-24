import express from 'express';
import mongoose from 'mongoose'; // Importer Mongoose

import gameRoutes from './routes/game.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'workshop4gamix2122';

// Cela afichera les requêtes MongoDB dans le terminal
mongoose.set('debug', true);
// Utilisation des promesses ES6 pour Mongoose, donc aucune callback n'est nécessaire
mongoose.Promise = global.Promise;

// Se connecter à MongoDB
mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`)
  .then(() => {
    // Une fois connecté, afficher un message de réussite sur la console
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    // Si quelque chose ne va pas, afficher l'erreur sur la console
    console.log(err);
  });

app.use(express.json());

app.use('/game', gameRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});