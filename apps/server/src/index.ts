import { app } from './app';

const PORT: number = 8008;

app.listen(PORT, () => {
    console.log(`Weekend Blog is awake on port: ${PORT}`);
});
