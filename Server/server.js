const express = require('express');
const cors = require('cors');
const eventRouter = require('./routes/eventRouter.js');

require('dotenv').config();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true 
};

const db = require('./database/db.js')
db.authenticate()
    .then(console.log('Database connected!'))
    .catch(e => console.error('Error:', e))
    



const app = express();

app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use("/api/v1/", eventRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})