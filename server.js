import express from 'express';

const app = express();

const port = process.env.PORT || 9090;

import gameRoutes from './routes/game.js'; // importer le router du fichier routes/game.js

app.use(express.json()); // Pour analyser (parsing) les requetes application/json

// préfixe chaque route ici avec /game
app.use('/game', gameRoutes); // Utiliser les routes créés

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});