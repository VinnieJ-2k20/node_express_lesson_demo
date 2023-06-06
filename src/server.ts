import express from 'express';
import cors from 'cors';
import { usersRouter } from './routers/users';
import { colorsRouter } from './routers/colors';

const app = express();
const PORT = 5000;

app.use(cors());

app.use('/users', usersRouter);
app.use('/colors', colorsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
