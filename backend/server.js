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
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const regiRoutes = require('./routes/regi');
const feedRoutes = require('./routes/feedback')

app.use('/events',eventsRouter);
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/regi',regiRoutes);
app.use('/api/feedback',feedRoutes);


app.listen(port, () => {
    console.log('Server is running on port: ${port}...');
});