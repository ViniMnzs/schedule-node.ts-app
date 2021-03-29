import express from 'express';
import './database';
import routes from './routes';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './errors/handler';

const app = express();
const port =  process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running`));