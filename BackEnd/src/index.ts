import express from 'express';
import cors from 'cors';
import register from './routers/Register/Register';
import login from './routers/Login';
import createDiet from './routers/CreateDiet';

const app = express();

app.use(cors());
app.use(express.json());

app.use(register);
app.use(login);
app.use(createDiet);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export { app };