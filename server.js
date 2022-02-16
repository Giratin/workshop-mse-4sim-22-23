import express from 'express';

const app = express();
const port = process.env.PORT || 9090;

import gameRoutes from './routes/game.js';
import userRoutes from './routes/user.js';
import achatRoutes from './routes/achat.js';

app.use(express.json());

app.use('/game', gameRoutes);
app.use('/user', userRoutes);
app.use('/buy', achatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});