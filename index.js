import cors from 'cors';
import express from "express";
import mongoose from "mongoose";
import router from './src/Router/router.js';
import { DB_URL, PORT } from './src/config/constants.js';

const app = express();

const corsOptions = {
    origin: ['http://localhost:5000'],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "DELETE"]
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', router);

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('Server working on port : ' + process.env.PORT));
    } catch (e) {
        console.log(e);
    }
};

startApp();
