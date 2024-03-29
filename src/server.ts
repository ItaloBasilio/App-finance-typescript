import express, { json } from 'express'
import 'dotenv/config';

import { routes } from './routes';
import { setupMongo } from './database';

setupMongo()
    .then(() => {

        const app = express();

        app.use(json());
        app.use(routes);
        app.listen(3000, () => console.log('🚀 Server started on port 3000'));

    }) 

