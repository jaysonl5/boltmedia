const express = require('express')
const cors = require('cors');
const path = require('path');
const { application } = require('express');
const mongoose = require('mongoose');
const { connect } = require('http2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB connection successful');
})

app.use(express.static(path.join(__dirname, "client", "public")));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});


