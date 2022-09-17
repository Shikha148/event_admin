const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app= express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true}, err => {
    if(err) throw err;
});
const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mogodb connection established");
})

const eventsRouter = require('./routes/events');

app.use('/events',eventsRouter);

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});