import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Servidor Up');
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
