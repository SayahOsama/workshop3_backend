
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {
    loginRoute,
    logoutRoute,
    signupRoute,
    usernameRoute,
} from './routes.js';

import {
    LOGIN_PATH,
    LOGOUT_PATH,
    SIGNUP_PATH,
    USERNAME_PATH,
} from './const.js';

dotenv.config();

let dbUri;
dbUri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@pws.jqme9mr.mongodb.net/workshop3`;
await mongoose.connect(dbUri);

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: ['https://osama-sayah.github.io/workshop3_frontend/','http://localhost:5173','https://osama-sayah.github.io', '*'], // Allow access from any origin
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

app.post(LOGIN_PATH, loginRoute);
app.post(LOGOUT_PATH, logoutRoute);
app.post(SIGNUP_PATH, signupRoute);

app.get(USERNAME_PATH, usernameRoute);

app.listen(port, () => {
    console.log(`Server running! port ${port}`);
});
