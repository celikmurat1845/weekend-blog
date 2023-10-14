import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req: Request, res: Response) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).send('Please provide the necessary fields');
    }

    res.send(200).send('Success');
});

export { app };
