const express = require('express');
const cors = require('cors');


require('dotenv').config();

const corsMiddleware = cors({
    credentials: true,
    origin: process.env.ORIGIN
});

const db = require('./database/db.js')
db.authenticate()
    .then(console.log('Database connected!'))
    .catch(e => console.error('Error:', e))
    



const app = express();


app.use(corsMiddleware);
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})