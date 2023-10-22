import dotenv from 'dotenv';
import { app } from './app';

dotenv.config({ path: './.env' });
console.log(`The connection URL is ${process.env.DATABASE_URL}`);

const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT, () => {
    console.log(`Weekend Blog is awake on port: ${PORT}: ${process.env.NODE_ENV}`);
});
