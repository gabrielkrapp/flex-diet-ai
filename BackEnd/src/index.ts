import express from 'express';
import cors from 'cors';
import register from './routers/Register/Register';
import login from './routers/Login';
import createDiet from './routers/CreateDiet';
import getdiets from './routers/GetDiets';
import getdiet from './routers/GetDiet';

const app = express();

app.use(cors());
app.use(express.json());

app.use(register);
app.use(login);
app.use(createDiet);
app.use(getdiets);
app.use(getdiet);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export { app };