import express from 'express';

const app: express.Application = express();
const router: express.Router = express.Router();
const port = process.env.PORT || 3030;

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, Express with TypeScript!');
});
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});