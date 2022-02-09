import express from 'express'; // Importer express

const app = express(); // Créer l'instance de express à utiliser

const hostname = '127.0.0.1'; // L'@ du serveur
const port = process.env.PORT || 9090; // Le port du serveur

class Game {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

/**
 * lorsqu'une demande arrive à 'entity'
 * à l'aide de la méthode GET de HTTP
 */
app.get('/entity', (req, res) => {
  const game = new Game("dmc5", 2019);
  res.status(200).json(game);
})

/**
 * Demander l'adresse (URL) de base '/'
 * à l'aide de la méthode GET de HTTP
 */
app.get('/', (req, res) => {
  res.status(200).json({ message : 'Hello World!' }); // envoyer la réponse au requérant
})

/**
 * lorsqu'une demande arrive à '/game/n_importe_quoi'
 * à l'aide de la méthode GET de HTTP
 */
app.get('/game/:name', (req, res) => {
  res.status(200).json({ message : `The name of this game is ${req.params.name}` });
})

/**
 * lorsqu'une demande arrive à '/secret'
 * à l'aide de la méthode GET de HTTP
 */
app.get("/secret", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

/**
 * Démarrer le serveur à l'écoute des connexions
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});