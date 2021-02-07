const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//import routes
const postsRoute = require('./routes/posts');
//MiddleWares
app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected.");
    });
const PORT = 3001;
app.listen(PORT);