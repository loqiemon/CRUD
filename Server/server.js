const express = require('express');
const cors = require('cors');
const eventRouter = require('./routes/eventRouter.js');

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
app.use("/api/v1/", eventRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})