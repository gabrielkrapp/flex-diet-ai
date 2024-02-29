import express from 'express';
import cors from 'cors';
import register from './routers/Register/Register';
import login from './routers/Login';

export const app = express();
const PORT = 80;

app.use(cors());
app.use(express.json());

app.use(register);
app.use(login);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});