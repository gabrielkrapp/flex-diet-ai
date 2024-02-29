import express from 'express';
import cors from 'cors';
import register from './routers/Register/Register';
import login from './routers/Login';

const app = express();

app.use(cors());
app.use(express.json());

app.use(register);
app.use(login);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export { app };