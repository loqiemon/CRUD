const express = require('express');
const cors = require('cors');
const eventRouter = require('./routes/eventRouter.js');

require('dotenv').config();

const corsOptions = {
    origin: "https://loqiemoncrud.netlify.app",
    // origin: "http://localhost:5173",
    credentials: true 
};

const db = require('./database/db.js')
db.authenticate()
    .then(console.log('Database connected!'))
    .catch(e => console.error('Error:', e))
    



const app = express();

app.use(express.static('public'))
app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use("/api/v1/", eventRouter);
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })

app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})

module.exports = app