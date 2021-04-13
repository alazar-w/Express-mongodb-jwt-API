// const dotEnv = require('./.env').config();

var express = require('express')
var app = express()
const port = 5000
const mongoose = require('mongoose')

//Import routes
const authRoute = require("./routes/auth")
const postRoute = require('./routes/post')


//connect to DB
// mongoose.connect('',
// process.env.DB_CONNECT,
// { useNewUrlParser: true },
// ()=>console.log('connected to db!'));
mongoose.connect('mongodb+srv://james:james@cluster0.ajj3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true},
() => console.log('connected to db'));

//midleware to red our data from our post request in postman
app.use(express.json());

//route middleware
app.use('/api/user',authRoute);

app.use('/api/posts',postRoute);






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })